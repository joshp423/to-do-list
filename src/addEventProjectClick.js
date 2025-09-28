import { renderContent } from "./renderContent";
import { addEventProjectButtons } from "./addEventProjectButtons";

export function addEventProjectClick(){
    const domProjects = document.querySelectorAll('#content>div')
    domProjects.forEach((project) => {
        project.addEventListener('click', (event) => {

            //render selected project in single view and add event listeners on click
            renderContent.renderProjectSingular(project.id)
            addEventProjectButtons()
            

        })
    })
}