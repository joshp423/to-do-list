import { Project } from "./projectClass";
import { userProjects } from "./initialArrays";
import { userToDos } from "./initialArrays";
import { existing } from "./initialArrays";
import { localStorageFunctions } from "./localStorageFunctions";

//function so initial project loads on page load
export function initialiseProject() {
    console.log(existing)
    if (existing === 0) {
        document.addEventListener("DOMContentLoaded", () => {
            userProjects.push(new Project("Project 1"));
            localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
            console.log(localStorageFunctions.retrieveFromLSUP());
        })
    }
}