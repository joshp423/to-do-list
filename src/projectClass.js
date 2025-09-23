export class Project {
    constructor(title, toDos) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        }

        this.title = title;
        this.complete = false;
        this.toDos = toDos;
        this.id = crypto.randomUUID();
    };
};