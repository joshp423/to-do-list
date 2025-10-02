import { userToDos } from "./initialArrays";
import { userProjects } from "./initialArrays";
import { localStorageFunctions } from "./localStorageFunctions";

export class EditToDoFunctions {

    static renameMisc(selectedToDo, updateField, updateValue) {


        //loop through todos to match and update in todo array
        userToDos.forEach((toDo) => {
            if (toDo.id === selectedToDo) {
                switch (updateField) {
                    case "Title":
                        toDo.title = updateValue;
                        break;
                    case "Desc":
                        toDo.description = updateValue;
                        break;
                    case "dueDate":
                        toDo.dueDate = updateValue;
                        break;
                    case "Priority":
                        toDo.priority = updateValue;
                        break;
                    case "Notes":
                        toDo.notes = updateValue;
                        break;
                }
            }
        })
        
        localStorageFunctions.clearAndPushToLS(userProjects, userToDos);
        
    }

    static toggleComplete(selectedToDo) {
         //loop through todos to match and update in todo array
        userToDos.forEach((toDo) => {
            if (toDo.id === selectedToDo) {
                if (toDo.complete === "Not Complete") {
                    toDo.complete = "Complete";
                    return;
                }
                toDo.complete = "Not Complete";
            }
        })
    }
}