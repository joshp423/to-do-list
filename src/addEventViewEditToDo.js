//create variables for passing to dynamic render function
let title = "'h2'";
let desc = "'p'";
let dueDate = "'p'";
let priority = "'p'";
let notes = "'p'";


//iterate through the different fields adding event listeners
const toDoDiv = document.querySelector("#content>div");
for (const field of toDoDiv.children) {
    if (field.id !== "Complete" || field.id !== "toggleComplete" || field.id !== "toDoExplainer") {
        field.addEventListener('click', () => {
            //switch

        })  
    }
   
}
