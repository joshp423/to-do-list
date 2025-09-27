

export function addEventProjectButtons(){
    const domProjectButtons = document.querySelectorAll('#content>div>button')
    domProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("button pressed")
        })
    })
}