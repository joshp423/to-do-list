import { addToDo } from "./addToDo"

export function addEventAddToDoForm(){
    const submitButton = document.querySelector('#content>div>form>button')
    const selectedProject = document.querySelectorAll('#content>div')
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        addToDo(selectedProject[0].id)
        
    })
    
}