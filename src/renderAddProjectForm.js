export function renderAddProjectForm() {

    //change header to match content
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''
    const header = document.getElementById('header');
    header.innerText = "Create Project";
}