import { initialiseProject } from "./initialiseProject";


export class localStorageFunctions {
    
    static clearAndPushToLS(userProjects, userToDos) {
        localStorage.clear();
        localStorage.setItem("userProjects", JSON.stringify(userProjects))
        localStorage.setItem("userToDos", JSON.stringify(userToDos))
    }

    static intialiseDefault(intitialProjects, initialToDos, existingcheck) {
        if (!localStorage.getItem("userProjects")) {
            localStorage.setItem("userProjects", JSON.stringify(intitialProjects));
            localStorage.setItem("userToDos", JSON.stringify(initialToDos));
            existingcheck = 0;
        }
        else {
            intitialProjects = localStorageFunctions.retrieveFromLSUP();
            initialToDos = localStorageFunctions.retrieveFromLSUTD()
            existingcheck = 1;
        }
        return {intitialProjects, initialToDos, existingcheck}
    }

    static retrieveFromLSUP() {
        return JSON.parse(localStorage.getItem("userProjects")) 
    }
    
    static retrieveFromLSUTD() {
        return JSON.parse(localStorage.getItem("userToDos")) 
    }
}