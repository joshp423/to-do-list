import { renderContent } from "./renderContent";

class ProjectButtons {
    constructor(button){
        this.button = button;
    }

    renameProject() {
        renderContent.renderRenameProjectForm();
        
    }
    
    
}