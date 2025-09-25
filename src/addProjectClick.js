
export function addProjectClick(){
    const formButton = document.querySelectorAll('#content>div>form>button');
    formButton[0].addEventListener('click', (event) => {
        event.preventDefault()
    })
}

