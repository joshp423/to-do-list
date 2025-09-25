import { Project } from "./projectClass";
import { userProjects } from "./initialArrays";

//function so initial project loads on page load
export function initialiseProject() {
    document.addEventListener("DOMContentLoaded", () => {
        userProjects.push(new Project("Project 1"))
        console.log(userProjects)
    })
}