class TitleRender {
    
    //change header to match content - should this be an iife?
    constructor() {
        this.headerTitle = document.getElementById('headerTitle');
    }

    renderProjectsTitle(){ 
        headerTitle.innerText = "Projects";
        return;
    }

    renderAddProjectTitle(){
        headerTitle.innerText = "Create Project";
        return;
    }
    
}

export const renderTitle = (() => {
    return new TitleRender()
})();