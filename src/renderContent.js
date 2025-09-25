import { userToDos } from ".";
import { userProjects } from "./initialiseProject";

class ContentRender {
    constructor(){
        this.contentContainer = document.getElementById('headerTitle')
        this.userToDos = userToDos;
        this.userProjects = userProjects;
    }
    
    //function to render all projects in the dom
    renderProjects(){
        const contentContainer = document.getElementById('content');
        contentContainer.innerHTML = ''
        this.userProjects.forEach((project) => {

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

            this.userToDos.forEach((todoItem) =>{
                if (todoItem.project === project.id) {
                    const todo = document.createElement('li');
                    todo.innerText = todoItem.title;
                    todos.append(todo);
                }
            })
        })
    };
}

export const renderContent = (() => {
    return new ContentRender();
})();



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