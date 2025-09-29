import { userProjects } from "./initialArrays";

export class EditProjectFunctions {

    static renameProject(selectedProject) {
        //create variables for user input and update userProjects array 
        const newTitle = document.querySelectorAll('#content>div>form>input');
        
        //loop through projects to find the matching title
        userProjects.forEach((project) => {
            if (project.title === selectedProject) {
                project.title = newTitle[0].value;
            }
            return;
        });
    };

    static deleteProject(selectedProject) {
        //loop through projects to find the matching title
        userProjects.forEach((project) => {
            if (project.title === selectedProject) {
                
                //once match found find the index and use splice to remove
                const position = userProjects.indexOf(project);
                console.log(position);
                userProjects.splice(position, 1);
            };
        });
    };
    
    static toggleCompleteProject(selectedProject) {

        //change relevant complete status
        userProjects.forEach((project) => {
            if (project.title === selectedProject) {
                if (project.complete === "Not Complete") {
                    project.complete = "Complete";
                    console.log(project.complete);
                    return;
                }
                else {
                    project.complete = "Not Complete";
                    console.log(project.complete);
                    return;
                }
            }
        });
    };
};
