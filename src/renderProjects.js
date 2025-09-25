//function to render one instance of a project in the dom
export function renderProjects(projectTitle, projectComplete, projectTodos){

    //project div
    const contentContainer = document.getElementById('content');
    const projectDiv = document.createElement('div');
    projectDiv.id = projectTitle;
    contentContainer.append(projectDiv);

    //project title
    const title = document.createElement('h2');
    title.innerText = projectTitle;

    //project complete
    const complete = document.createElement('button')
    complete.innerText = projectComplete;
    complete.type = "button";

    //project todos and adding elements before todos
    const todos = document.createElement('ul');
    projectDiv.append(title, complete, todos);
    
    projectTodos.forEach((todoItem) =>{
        if (todoItem.project === project.id) {
            const todo = document.createElement('li');
            todo.innerText = todoItem.title;
            todos.append(todo);
        }

        
    })
        
}



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