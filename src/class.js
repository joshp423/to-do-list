export class todo {
        constructor(title, description, dueDate, priority, notes, project) {
            if (!new.target) {
                throw Error("You must use the 'new' operator to call the constructor");
            }
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.complete = false;
            this.project = project;
            this.id = crypto.randomUUID();
        }
};