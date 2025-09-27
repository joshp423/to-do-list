import { renderContent } from "./renderContent";

export function addEventProjectClick(){
    const domProjects = document.querySelectorAll('#content>div')
    domProjects.forEach((project) => {
        project.addEventListener('click', (event) => {
            const projectId = project.id
            console.log(projectId)
            renderContent.renderProjectSingular(projectId)
        })
    })
}