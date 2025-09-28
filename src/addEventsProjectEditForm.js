import { editProjectButtonFunctions } from "./editProjectButtonFunctions";

export function addEventsProjectEditForm(){
    const currentProject = document.querySelectorAll("#content>div")
    const projectEditFormButton = document.querySelectorAll('#content>div>form>button');
    projectEditFormButton[0].addEventListener('click', (event) => {
        event.preventDefault();
        editProjectButtonFunctions.renameProject(currentProject.id)

    })
}