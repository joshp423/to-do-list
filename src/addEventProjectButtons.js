import { renderContent } from "./renderContent"
import { addEventsProjectEditForm } from "./addEventsProjectEditForm"
import { renderTitle } from "./renderTitle"
import { EditProjectFunctions } from "./editProjectFunctions"
import { addEventProjectClick } from "./addEventProjectClick"

export function addEventProjectButtons(){
    const project = document.querySelectorAll('#content>div')
    const domProjectButtons = document.querySelectorAll('#content>div>button')
    domProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            
            //switch statement to manage different button functionality
            switch (button.id) {
                case "projectEdit":
                    renderTitle.renderEditProjectTitle(project[0].id);
                    renderContent.renderRenameProjectForm(project[0].id);
                    addEventsProjectEditForm();
                    break;
            
                case "projectComplete":
                    EditProjectFunctions.toggleCompleteProject(project[0].id);
                    renderTitle.renderProjectsTitle();
                    renderContent.renderProjectsProjectView();
                    addEventProjectClick();
                    break;
                
                case "projectAddToDo":
                    renderTitle.renderAddToDoTitle();
                    renderContent.renderAddToDoForm(project[0].id);
                    break;
            }
        })
    })
}
