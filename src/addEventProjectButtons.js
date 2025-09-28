import { renderContent } from "./renderContent"

export function addEventProjectButtons(){
    const domProjectButtons = document.querySelectorAll('#content>div>button')
    domProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("button pressed")
            //switch statement to manage different button functionality
            switch (button.id) {
                case "projectEdit":
                    renderContent.renderRenameProjectForm();
                    break;
            
                case "projectComplete":
                    break;
                
                case "projectAddToDo":
                    break;
            }
        })
    })
}