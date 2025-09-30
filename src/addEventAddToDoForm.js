import { addToDo } from "./addToDo"
import { renderContent } from "./renderContent"
import { renderTitle } from "./renderTitle";
import { addEventProjectButtons } from "./addEventProjectButtons";

export function addEventAddToDoForm(){
    const submitButton = document.querySelector('#content>div>form>button')
    const selectedProject = document.querySelectorAll('#content>div')
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        addToDo(selectedProject[0].id)
        renderTitle.renderViewProjectTitle(selectedProject[0].id)
        renderContent.renderProjectSingular(selectedProject[0].id)
        addEventProjectButtons();
    })
    
}