import { renderContent } from "./renderContent";

export function addEventViewEditToDo() {
    //create variables for passing to dynamic render function
    let title = document.createElement('h2');
    let desc = document.createElement('p');
    let dueDate = document.createElement('p');
    let priority = document.createElement('p');
    let notes = document.createElement('p');


    //iterate through the different fields adding event listeners
    const toDoDiv = document.querySelectorAll("#todos>div");
    toDoDiv[0].children.foreach((field) => {
        if (field.id !== "Complete" || field.id !== "toggleComplete" || field.id !== "toDoExplainer") {
            field.addEventListener('click', (event) => {
                switch (event.target.id) {
                    case "Title":
                        title = document.createElement('input');
                        break;
                    case "Desc":
                        desc = document.createElement('input');
                        break;
                    case "dueDate":
                        dueDate = document.createElement('input');
                        break;
                    case "Priority":
                        // priority = document.createElement('input')
                        break;
                    case "Notes":
                        notes = document.createElement('input');
                }
                renderContent.renderToDoSingularDynamic(toDoDiv.id, title, desc, dueDate, priority, notes)

            })  
        }
    
    })
}
