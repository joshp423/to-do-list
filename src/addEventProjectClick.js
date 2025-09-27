import { renderContent } from "./renderContent";
import { addEventProjectButtons } from "./addEventProjectButtons";

export function addEventProjectClick(){
    const domProjects = document.querySelectorAll('#content>div')
    domProjects.forEach((project) => {
        project.addEventListener('click', (event) => {
            const projectId = project.id
            console.log(projectId)
            renderContent.renderProjectSingular(projectId)
            addEventProjectButtons()
        })
    })
}