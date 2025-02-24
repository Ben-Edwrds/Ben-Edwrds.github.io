const setup = () => {
    let button1 = document.getElementById("btn1");
    button1.addEventListener('click', changeColor)
    let button2 = document.getElementById("btn2");
    button2.addEventListener('click', changeColor)
    let button3 = document.getElementById("btn3");
    button3.addEventListener('click', changeColor)
}

const changeColor = (event) => {
    const clickedButton = event.target;
    if(clickedButton.id === "btn1") {
        document.getElementById("btn1").classList.add("blue");
        document.getElementById("btn2").classList.remove("blue");
        document.getElementById("btn3").classList.remove("blue");
    } else if (clickedButton.id === "btn2") {
        document.getElementById("btn1").classList.remove("blue");
        document.getElementById("btn2").classList.add("blue");
        document.getElementById("btn3").classList.remove("blue");
    } else if (clickedButton.id === "btn3") {
        document.getElementById("btn1").classList.remove("blue");
        document.getElementById("btn2").classList.remove("blue");
        document.getElementById("btn3").classList.add("blue");
    }
}
window.addEventListener("load", setup);