import { renderContent } from "./renderContent"
import { addEventsProjectEditForm } from "./addEventsProjectEditForm"
import { renderTitle } from "./renderTitle"
import { EditProjectFunctions } from "./editProjectFunctions"
import { addEventProjectClick } from "./addEventProjectClick"
import { addEventAddToDoForm } from "./addEventAddToDoForm"
import { addEventViewEditToDo } from "./addEventViewEditToDo"
import { userToDos } from "./initialArrays"

export function addEventProjectButtons(){
    const project = document.querySelectorAll('#content>div');
    const domProjectButtons = document.querySelectorAll('#content>div>button');
    const todos = document.querySelectorAll('#todos>div')
    domProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            
            //switch statement to manage different button functionality
            switch (button.id) {
                case "projectEdit":
                    renderTitle.renderEditProjectTitle(project[0].id);
                    renderContent.renderEditProjectForm(project[0].id);
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
                    addEventAddToDoForm(project[0].id);
                    break;
            }
        })
    })
    todos.forEach((todo) => {
        if (todo.innerHTML !== "No To-do's") {
            todo.addEventListener('click', () => {
                renderContent.renderToDoSingularDefault(todo.id);
                renderTitle.renderViewEditToDoTitle();
                addEventViewEditToDo();
            })
            todo.addEventListener('mouseover', () => {
                todo.style.cursor = "pointer";
            })
        }
    })
}
