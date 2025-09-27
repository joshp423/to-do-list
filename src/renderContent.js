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
    renderProjectsProjectView(){
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
            const complete = document.createElement('p')
            complete.innerText = project.complete;

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

    //function to render individual project view
    renderProjectSingular(project) {

        //clear current content
        this.contentContainer.innerHTML = '';
        //add Project Div
        const projectDiv = document.createElement('div');
        projectDiv.id = project;
        this.contentContainer.appendChild(projectDiv);

        //add title
        const projectTitle = document.createElement('h2')
        projectTitle.innerText = project;
        projectDiv.append(projectTitle)

        //add to-dos description, due date, priority (list by), notes and edit button,
        // complete button. 
        const todosDiv = document.createElement('div')
        projectDiv.append(todosDiv)

        this.userToDos.forEach((todoItem) => {
            if (todoItem.project === project) {
                const todoDiv = document.createElement('div');
                todoDiv.id = todoItem.id;
                projectDiv.appendChild(todoDiv)

                const todoTitle = document.createElement('p');
                todoTitle.innerText = todoDiv.title;

                const todoDesc = document.createElement('p');
                todoDesc.innerText = todoItem.description;

                const todoDueDate = document.createElement('p');
                todoDueDate.innerText = todoItem.dueDate;

                const todoPriority = document.createElement('p');
                todoPriority.innerText = todoDiv.priority;

                const todoEdit = document.createElement('button');
                todoEdit.innerText = "Edit";

                const todoComplete = document.createElement('button');
                if (todoItem.complete === false) {
                    todoComplete.innerText = "Not Complete";
                }
                else {
                    todoComplete.innerText = "Complete";
                }
                todoDiv.append(todoTitle, todoDesc, todoPriority, todoEdit, todoComplete);
            }
        })

        if (!todosDiv.firstChild) {
                todosDiv.innerText = "No To-do's";
        }

        //Edit, complete, and add to-do buttons for project
        const projectRename = document.createElement('button');
        projectRename.innerText = "Rename";

        const projectEdit = document.createElement('button');
        projectEdit.innerText = "Edit";

        const projectAddToDo = document.createElement('button');
        projectAddToDo.innerText = "Add To-do";
        
        projectDiv.append(projectRename, projectEdit, projectAddToDo);
    }
}


export const renderContent = (() => {
    return new ContentRender();
})();
