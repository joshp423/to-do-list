import { userProjects } from "./initialArrays";
import { userToDos } from "./initialArrays";
import { localStorageFunctions } from "./localStorageFunctions";

export class EditProjectFunctions {

    static renameProject(selectedProject) {
        //create variables for user input and update userProjects array 
        const newTitle = document.querySelectorAll('#content>div>form>input');
        
        //loop through projects to find the matching title - should use ID
        userProjects.forEach((project) => {
            if (project.title === selectedProject) {
                project.title = newTitle[0].value;
            }
            return;
        });
        localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
    };

    static deleteProject(selectedProject) {
        //loop through projects to find the matching title
        userProjects.forEach((project) => {
            if (project.title === selectedProject) {
                
                //once match found find the index and use splice to remove
                const position = userProjects.indexOf(project);
                console.log(position);
                userProjects.splice(position, 1);

                //also delete associated todos from array
                userToDos.forEach((todo) => {
                    if (todo.project === project.id) {
                    const position = userToDos.indexOf(todo);
                    console.log(position);
                    userToDos.splice(position, 1);
                    };
                });
            };
        });
        
        localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
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
        localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
    };
};
