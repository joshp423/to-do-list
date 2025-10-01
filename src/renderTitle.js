class TitleRender {
    
    //change header to match content 
    constructor() {
        this.headerTitle = document.getElementById('headerTitle');
    }

    renderProjectsTitle(){ 
        headerTitle.innerText = "Projects";
        return;
    }

    renderAddProjectTitle(){
        headerTitle.innerText = "New Project";
        return;
    }

    renderViewProjectTitle(){
        headerTitle.innerText = "View and Edit Project";
    }

    renderEditProjectTitle(project){
        headerTitle.innerText = `Edit ${project}`;
    }

    renderAddToDoTitle(){
        headerTitle.innerText = "Add New To-do";
    }
    
    renderViewEditToDoTitle(){
        headerTitle.innerText = "View or Edit To-do";
    }
}

export const renderTitle = (() => {
    return new TitleRender();
})();