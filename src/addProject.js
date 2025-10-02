import { userProjects } from "./initialArrays";
import { Project } from "./projectClass";
import { userToDos } from "./initialArrays";
import { localStorageFunctions } from "./localStorageFunctions";

export function addProject(){
    const title = document.querySelectorAll('#content>div>form>input')
    const titleValue = title[0].value
    console.log(titleValue)
    userProjects.push(new Project(titleValue))
    localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
    console.log(localStorageFunctions.retrieveFromLSUP());
}