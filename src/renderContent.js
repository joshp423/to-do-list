import { userProjects } from "./initialArrays";
import { userToDos } from "./initialArrays";
import { todo } from "./toDoClass";

class ContentRender {
    constructor(){
        this.contentContainer = document.getElementById('content')
        this.userToDos = userToDos;
        this.userProjects = userProjects;
    }
    
    //function to render all projects in the dom
    renderProjects(){
        this.contentContainer.innerHTML = '';
        this.userProjects.forEach((project) => {

            //project div
            const projectDiv = document.createElement('div');
            projectDiv.id = project.title;
            this.contentContainer.append(projectDiv);

            //project title
            const title = document.createElement('h2');
            title.innerText = project.title;

            //project complete
            const complete = document.createElement('button')
            complete.innerText = project.complete;
            complete.type = "button";

            //project todos and adding elements before todos
            const todos = document.createElement('ul');
            projectDiv.append(title, todos, complete);

            this.userToDos.forEach((todoItem) =>{
                if (todoItem.project === project.id) {
                    const todo = document.createElement('li');
                    todo.innerText = todoItem.title;
                    todos.append(todo);
                }
            })

            //if no to-do's tell the user that instead of blank
            if (todos.innerText === "") {
                        todos.innerText = "No To-do's";
            }
        })
    };

    //function to render the add project form
    renderAddProjectsForm() {
        //set up and add div and form
        this.contentContainer.innerHTML = '';
        const formContainer = document.createElement('div');
        this.contentContainer.append(formContainer);
        const addProjectForm = document.createElement('form');
        formContainer.append(addProjectForm);
        
        //add form inputs and buttons
        const projectTitleInput = document.createElement('input');
        projectTitleInput.placeholder = "Project Title";
        const projectformButton = document.createElement('button');
        projectformButton.innerText = "Add Project";
        projectformButton.type = 'submit';
        addProjectForm.append(projectTitleInput, projectformButton);
    }
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