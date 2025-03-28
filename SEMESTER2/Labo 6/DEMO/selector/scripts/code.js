const setup = () => {
    let lstParDiv = document.querySelectorAll('#myDIV > .color');

    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener('click', changeDiv)
    }
}

const change = (e) => {}

const changeDiv = (event) => {
    event.target.className = "colorParDiv";
}

window.addEventListener("load", setup);