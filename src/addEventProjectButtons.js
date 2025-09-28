import { renderContent } from "./renderContent"
import { addEventsProjectEditForm } from "./addEventsProjectEditForm"

export function addEventProjectButtons(){
    const project = document.querySelector('#content>div')
    const domProjectButtons = document.querySelectorAll('#content>div>button')

    domProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("button pressed")
            //switch statement to manage different button functionality
            switch (button.id) {
                case "projectEdit":
                    renderContent.renderRenameProjectForm(project.id);
                    addEventsProjectEditForm();
                    break;
            
                case "projectComplete":
                    break;
                
                case "projectAddToDo":
                    break;
            }
        })
    })
}