export function renderProjects(projectTitle, projectComplete, projectTodos){
    //project div
    const contentContainer = document.getElementById('content');
    const projectDiv = document.createElement('div');
    projectDiv.id = projectTitle;
    contentContainer.append(projectDiv)

    //project title
    const title = document.createElement('h2');
    title.innerText = projectTitle;

    //project complete
    const complete = document.createElement('button')
    complete.innerText = projectComplete;
    complete.type = "button"

    //project todos
    const todos = document.createElement('ul');
    projectTodos.forEach((todoItem) =>{
        const todo = document.createElement('li');
        todo.innerText = todoItem.title
        todos.append(todo);
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