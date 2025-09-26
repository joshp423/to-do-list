import { userProjects } from "./initialArrays";
import { Project } from "./projectClass";

export function addProject(){
    const title = document.querySelectorAll('#content>div>form>input')
    const titleValue = title[0].value
    console.log(titleValue)
    userProjects.push(new Project(titleValue))
}