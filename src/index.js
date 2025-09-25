export let userToDos = [];
import { renderTitle } from "./renderTitle";
import { Project } from "./projectClass";
import { initialiseProject } from "./initialiseProject";
import { userProjects } from "./initialiseProject";
import { renderContent } from "./renderContent";
import './style.css';
 
//initialise default project - will change to reading memory
initialiseProject()
console.log(userProjects)

//after dom is loaded given project view is default, load projects to DOM
addEventListener("DOMContentLoaded", () => {
    renderContent.renderProjects()
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
                renderContent.renderProjects()
            }
                
            else if (item.id === "addproject") {
                renderTitle.renderAddProjectTitle()
            };
        }
    });
});