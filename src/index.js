import { userToDos } from "./initialArrays";
import { renderTitle } from "./renderTitle";
import { Project } from "./projectClass";
import { initialiseProject } from "./initialiseProject";
import { userProjects } from "./initialArrays";
import { renderContent } from "./renderContent";
import { addProjectClick } from "./addProjectClick";
import { addEventProjectClick } from "./addEventProjectClick";
import { StyleFunctions } from "./styleFunctions";
import './style.css';
 
//initialise default project - will change to reading memory
initialiseProject()
renderContent.renderProjectsProjectView()
console.log(userProjects)

//after dom is loaded given project view is default, load projects to DOM
//add EL for singular project view
addEventListener("DOMContentLoaded", () => {
    renderContent.renderProjectsProjectView()
    addEventProjectClick()
})


//sidebar tab logic
const sidebar = document.querySelectorAll('.sidebar>div');


sidebar.forEach((item) => {
    item.addEventListener('click', () => {

        //only acting for tabs that aren't already active
        if (!item.classList.contains('active')) {

            // remove active from all tabs
            sidebar.forEach((item) => {
                item.classList.remove('active')
                item.classList.add('notActive')
            });

            // add active to clicked tab
            item.classList.add('active');
            item.classList.remove('notActive');

            // render content for tab
            if (item.id === "projects") {
                renderTitle.renderProjectsTitle()
                renderContent.renderProjectsProjectView()
                addEventProjectClick()
            }
                
            else if (item.id === "addproject") {
                const content = document.getElementById('content')
                renderTitle.renderAddProjectTitle()
                renderContent.renderAddProjectsForm()
                StyleFunctions.singleView(content)
                addProjectClick()
            };
        }
    });
});