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

    renderEditProjectsTitle(){
        this.headerTitle.innerText;
    }
    
}

export const renderTitle = (() => {
    return new TitleRender();
})();