import { EditProjectFunctions } from "./editProjectFunctions";
import { renderContent } from "./renderContent";
import { renderTitle } from "./renderTitle";
import { userProjects } from "./initialArrays";
import { addEventProjectButtons } from "./addEventProjectButtons";

export function addEventsProjectEditForm(){
    let currentProject = document.querySelectorAll("#content>div")
    const projectEditFormButton = document.querySelectorAll('#content>div>form>button');
    
    //add event listener and relevant functions to edit project title button
    projectEditFormButton[0].addEventListener('click', (event) => {
        event.preventDefault();
        console.log(currentProject[0].id);
        EditProjectFunctions.renameProject(currentProject[0].id);
        const newTitle = document.querySelectorAll('#content>div>form>input');
        renderContent.renderProjectSingular(newTitle[0].value);
        addEventProjectButtons();
    })

    //add event listener and relevant functions to delete project button
    const projectDeleteButton = document.getElementById("projectDeleteButton");
    projectDeleteButton.addEventListener('click', () => {
        const projectsSidebar = document.getElementById('projects');
        const addProjectsSidebar = document.getElementById('addproject');
        EditProjectFunctions.deleteProject(currentProject[0].id)
        if (userProjects.length > 0) {
            renderTitle.renderProjectsTitle();
            renderContent.renderProjectsProjectView();
            projectsSidebar.classList.remove('notActive');
            projectsSidebar.classList.add('active');
        }
        else {
            renderTitle.renderAddProjectTitle();
            renderContent.renderAddProjectsForm();
            addProjectsSidebar.classList.add('active');
            addProjectsSidebar.classList.remove('notActive');
        }
    })
}