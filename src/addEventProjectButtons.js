import { renderContent } from "./renderContent"
import { addEventsProjectEditForm } from "./addEventsProjectEditForm"
import { renderTitle } from "./renderTitle"
import { EditProjectFunctions } from "./editProjectFunctions"

export function addEventProjectButtons(){
    const project = document.querySelector('#content>div')
    const domProjectButtons = document.querySelectorAll('#content>div>button')

    domProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            
            //switch statement to manage different button functionality
            switch (button.id) {
                case "projectEdit":
                    renderTitle.renderEditProjectTitle(project.id);
                    renderContent.renderRenameProjectForm(project.id);
                    addEventsProjectEditForm();
                    break;
            
                case "projectComplete":
                    EditProjectFunctions.completeProject(project.id);
                    console.log("yer");
                    renderContent.renderProjectSingular(project.id);
                    break;
                
                case "projectAddToDo":
                    break;
            }
        })
    })
}
