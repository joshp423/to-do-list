import { renderContent } from "./renderContent";
import { addEventProjectButtons } from "./addEventProjectButtons";
import { renderTitle } from "./renderTitle";

export function addEventProjectClick(){
    const domProjects = document.querySelectorAll('#content>div')
    const projectsSidebar = document.getElementById('projects');
    domProjects.forEach((project) => {
        project.addEventListener('click', (event) => {

            //render selected project in single view and add event listeners on click
            renderTitle.renderViewProjectTitle(project.id)
            renderContent.renderProjectSingular(project.id)
            addEventProjectButtons()
            
            //reset project sidebar to not active so user can go back to projects view
            projectsSidebar.classList.add('notActive');
            projectsSidebar.classList.remove('active');
        })
    })
}