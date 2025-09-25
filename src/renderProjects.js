import { userToDos } from ".";
import { userProjects } from "./initialiseProject";

//function to render all projects in the dom
export function renderProjects(userProjects, userToDos){
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''
    userProjects.forEach((project) => {

        //project div
        const projectDiv = document.createElement('div');
        projectDiv.id = project.title;
        contentContainer.append(projectDiv);

        //project title
        const title = document.createElement('h2');
        title.innerText = project.title;

        //project complete
        const complete = document.createElement('button')
        complete.innerText = project.complete;
        complete.type = "button";

        //project todos and adding elements before todos
        const todos = document.createElement('ul');
        projectDiv.append(title, complete, todos);

        userToDos.forEach((todoItem) =>{
            if (todoItem.project === project.id) {
                const todo = document.createElement('li');
                todo.innerText = todoItem.title;
                todos.append(todo);
            }
        }); 
    });
};



// class projectRender {
//     constructor() {}

//     renderProjectBox(contentDiv, projectTitle){
//         const projectDiv = document.createElement('div');
//         projectDiv.id = projectTitle;
//         contentDiv.append(projectDiv)
//     }

//     renderProjectTitle(){}

//     renderProjectComplete(){}

//     renderProjectTodos(){}


// }

// export const renderProjects = (() => {
//     return new projectRender()
// })();