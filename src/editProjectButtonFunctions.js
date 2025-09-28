import { userProjects } from "./initialArrays";

class EditProjectButtonFunctions {
    constructor(){
    }

    renameProject(selectedProject) {
        //create variables for user input and update userProjects array 
        const newTitle = document.querySelectorAll('#content>div>form>input');
        
        //loop through projects to find the matching title
        userProjects.forEach((project) => {
            console.log(userProjects)
            if (project.title === selectedProject) {
                project.title = newTitle[0].value;
            }
            return;
        })
    }

    deleteProject(selectedProject) {
        //loop through projects to find the matching title
        userProjects.forEach((project) => {
            console.log(userProjects)
            if (project.title === selectedProject) {
                
                //once match found find the index and use splice to remove
                const position = userProjects.indexOf(project);
                console.log(position)
                userProjects.splice(position, 1);
            }
        })
    }   

}

export const editProjectButtonFunctions = (() => {
    return new EditProjectButtonFunctions();
})();