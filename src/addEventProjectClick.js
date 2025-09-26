export function addEventProjectClick(){
    const domProjects = document.querySelectorAll('#content>div')
    domProjects.forEach((project) => {
        project.addEventListener('click', (event) => {
            const targetId = event.target.id;
            console.log(targetId)
        })
    })
}