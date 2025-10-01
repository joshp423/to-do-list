import { EditToDoFunctions } from "./editToDoFunctions";
import { renderContent } from "./renderContent";
import { renderTitle } from "./renderTitle";
import { addEventViewEditToDo } from "./addEventViewEditToDo";

export function addEventDynamicToDoEditForm() {
    const confirmChangesButton = document.getElementById("confirmChangesButton")
    confirmChangesButton.addEventListener('click', () => {
        const toDoDiv = document.querySelector("#content>div");
        console.log(toDoDiv.id);
        const fields = toDoDiv.children
        let selectedField;
        let updateValue;
        Array.from(fields).forEach((field) => {
            if (field.tagName === "INPUT" || field.tagName === "SELECT") {
                selectedField = field.id;
                updateValue = field.value;
            }
        });
        EditToDoFunctions.renameMisc(toDoDiv.id, selectedField, updateValue);
        renderContent.renderToDoSingularDefault(toDoDiv.id);
        renderTitle.renderViewEditToDoTitle();
        addEventViewEditToDo();
    });
};