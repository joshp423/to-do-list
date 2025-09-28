import { editProjectButtonFunctions } from "./editProjectButtonFunctions";

export function addEventsProjectEditForm(){
    const currentProject = document.querySelectorAll("#content>div")
    const projectEditFormButton = document.querySelectorAll('#content>div>form>button');
    
    //add event listener and relevant functions to edit project title button
    projectEditFormButton[0].addEventListener('click', (event) => {
        event.preventDefault();
        console.log(currentProject[0].id)
        editProjectButtonFunctions.renameProject(currentProject[0].id)
        
    })

    //add event listener and relevant functions to delet project button
    const projectDeleteButton = document.getElementById("projectDeleteButton");
    projectDeleteButton.addEventListener('click', () => {
        editProjectButtonFunctions.deleteProject(currentProject[0].id)
    })
}