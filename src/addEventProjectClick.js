import { renderContent } from "./renderContent";
import { addEventProjectButtons } from "./addEventProjectButtons";
import { renderTitle } from "./renderTitle";

export function addEventProjectClick(){
    const domProjects = document.querySelectorAll('#content>div')
    domProjects.forEach((project) => {
        project.addEventListener('click', (event) => {

            //render selected project in single view and add event listeners on click
            renderTitle.renderViewProjectTitle(project.id)
            renderContent.renderProjectSingular(project.id)
            addEventProjectButtons()
            

        })
    })
}