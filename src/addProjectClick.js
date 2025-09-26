import { addProject } from "./addProject";
import { renderTitle } from "./renderTitle";
import { renderContent } from "./renderContent";
import { addEventProjectClick } from "./addEventProjectClick";

export function addProjectClick(){
    const formButton = document.querySelectorAll('#content>div>form>button');
    const projectsSidebar = document.getElementById('projects');
    const addProjectsSidebar = document.getElementById('addproject');

    formButton[0].addEventListener('click', (event) => {
        event.preventDefault();
        addProject();
        renderTitle.renderProjectsTitle();
        renderContent.renderProjectsProjectView();
        addProjectsSidebar.classList.remove('active');
        addProjectsSidebar.classList.add('notActive');
        projectsSidebar.classList.add('notActive');
        projectsSidebar.classList.remove('active');
        addEventProjectClick()      
    });
};

