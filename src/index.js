import { renderTitle } from "./renderTitle";
import './style.css';
 

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

                // render title for tab
                if (item.id === "projects") {
                    console.log(renderTitle)
                    renderTitle.renderProjectsTitle()
                }
                else if (item.id === "addproject") {
                    renderTitle.renderAddProjectTitle()
                }

            }
        })
    });