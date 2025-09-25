import { renderTitle } from "./renderTitle";
import { Project } from "./projectClass";
import { initialiseProject } from "./initialiseProject";
import { userProjects } from "./initialiseProject";
import './style.css';
 
initialiseProject()
console.log(userProjects)


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
            })

            // add active to clicked tab
            item.classList.add('active');
            item.classList.remove('notActive');

            // render content for tab
            if (item.id === "projects") {
                renderTitle.renderProjectsTitle()
                
            }
            else if (item.id === "addproject") {
                renderTitle.renderAddProjectTitle()
            }

        }
    });
});