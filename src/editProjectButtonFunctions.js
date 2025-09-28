import { userProjects } from "./initialArrays";

class EditProjectButtonFunctions {
    constructor(){
    }

    renameProject(project) {
        //create variables for user input and update userProjects array
        const newTitle = document.querySelectorAll('#content>div>form>input')
        const position = userProjects.indexOf(project);
        console.log(position)
        console.log(userProjects)
        userProjects[position].title = newTitle[0].value;
    }
    
    
}

export const editProjectButtonFunctions = (() => {
    return new EditProjectButtonFunctions();
})();