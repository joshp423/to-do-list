import { userToDos } from "./initialArrays";
import { todo } from "./toDoClass";
import { userProjects } from "./initialArrays";
import { localStorageFunctions } from "./localStorageFunctions";

export function addToDo(selectedProject){
    const titleInput = document.querySelector('#title>input');
    const descInput = document.querySelector('#desc>input');
    const dueDateInput = document.querySelector('#dueDate>input');
    const priorityInput = document.querySelector('#priority>select');
    const notesInput = document.querySelector('#notes>input');
    let projectinfo;

    //check id against projects to find unique id for todo
    userProjects.forEach((project) => {
        if (project.title === selectedProject) {
            projectinfo = project.id
        }

    }); 

    //push new todo to array
    userToDos.push(new todo(
        titleInput.value, descInput.value,
        dueDateInput.value, priorityInput.value,
        notesInput.value, projectinfo
    ));
    localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
    console.log(localStorageFunctions.retrieveFromLSUTD());
    console.log(userToDos)
}
