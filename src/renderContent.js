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

        //projects check
        if (userProjects.length === 0) {
            this.contentContainer.innerHTML = "No projects"
            return;
        }

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
        });
        
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
                todoComplete.innerText = todoItem.complete;
                todoDiv.append(todoTitle, todoDesc, todoPriority, todoEdit, todoComplete);
            }
        })

        if (!todosDiv.firstChild) {
                todosDiv.innerText = "No To-do's";
        }

        //Rename, complete, and add to-do buttons for project
        const projectEdit = document.createElement('button');
        projectEdit.id = "projectEdit";
        projectEdit.innerText = "Edit Project";

        const projectComplete = document.createElement('button');
        projectComplete.id = "projectComplete";
        projectComplete.innerText = "Toggle Completion";

        const projectAddToDo = document.createElement('button');
        projectAddToDo.id = "projectAddToDo";
        projectAddToDo.innerText = "Add To-do";
        
        projectDiv.append(projectEdit, projectComplete, projectAddToDo);
    }

    renderRenameProjectForm(project) {

        //clear content div
        this.contentContainer.innerHTML = '';

        //add div and form to contentcontainer
        const formContainer = document.createElement('div');
        formContainer.id = project;
        this.contentContainer.append(formContainer);
        const RenameProjectForm = document.createElement('form');
        formContainer.append(RenameProjectForm);
        
        //add form inputs and buttons
        const projectTitleRenameInput = document.createElement('input')
        projectTitleRenameInput.placeholder = "New Project Title";
        const projectformButton = document.createElement('button');
        projectformButton.innerText = "Confirm New Project Title";
        projectformButton.type = 'submit';
        RenameProjectForm.append(projectTitleRenameInput, projectformButton);
        
        //add delete button
        const projectDeleteButton = document.createElement('button');
        projectDeleteButton.id = "projectDeleteButton";
        projectDeleteButton.innerText = "Delete Project and To-do's";
        formContainer.append(projectDeleteButton);

    }

    //function to render add to-do form
    renderAddToDoForm(project) {

        //clear content div
        this.contentContainer.innerHTML = '';

        //add div and form to contentcontainer
        const formContainer = document.createElement('div');
        formContainer.id = project;
        this.contentContainer.append(formContainer);
        const addToDoForm = document.createElement('form');
        formContainer.append(addToDoForm);

        //add form labels, inputs, and buttons
        const titleDiv = document.createElement('div');
        titleDiv.id = "title";
        const titleInputLabel = document.createElement('label');
        titleInputLabel.innerText = "Title:";
        const titleInput = document.createElement('input');

        const descDiv = document.createElement('div');
        descDiv.id = "desc";
        const descInputLabel = document.createElement('label');
        descInputLabel.innerText = "Description:";
        const descInput = document.createElement('input');

        const dueDateDiv = document.createElement('div');
        dueDateDiv.id = "dueDate";
        const dueDateInputLabel = document.createElement('label');
        dueDateInputLabel.innerText = "Due Date:";
        const dueDateInput = document.createElement('input');

        const priorityDiv = document.createElement('div');
        priorityDiv.id = "priority";
        const prioritySelect = document.createElement('select')
        const priorityInputLow = document.createElement('option');
        priorityInputLow.value = "Low";
        priorityInputLow.name = "priority";
        priorityInputLow.innerText = "Low";
        
        const priorityInputMedium = document.createElement('option');
        priorityInputMedium.value = "Medium";
        priorityInputMedium.name = "priority";
        priorityInputMedium.innerText = "Medium";
        
        const priorityInputHigh = document.createElement('option');
        priorityInputHigh.value = "High";
        priorityInputHigh.name = "priority";
        priorityInputHigh.innerText = "High";

        const notesDiv = document.createElement('div');
        notesDiv.id = "notes"
        const notesLabel = document.createElement('label');
        notesLabel.innerText = "Notes:";
        const notesInput = document.createElement('input');

        const submitButton = document.createElement('button');
        submitButton.innerText = "Submit";
        submitButton.type = "submit";

        //append elements
        addToDoForm.append(titleDiv, descDiv, dueDateDiv, priorityDiv, notesDiv, submitButton);
        titleDiv.append(titleInputLabel, titleInput);
        descDiv.append(descInputLabel, descInput);
        dueDateDiv.append(dueDateInputLabel, dueDateInput);
        priorityDiv.appendChild(prioritySelect);
        prioritySelect.append(priorityInputLow, priorityInputMedium, priorityInputHigh);
        notesDiv.append(notesLabel, notesInput);
    }
}

export const renderContent = (() => {
    return new ContentRender();
})();
