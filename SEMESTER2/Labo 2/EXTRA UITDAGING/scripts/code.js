const setup = () => {
    let button = document.getElementById("btnWijzig");
    button.addEventListener("click", wijzigOpmaak)
}
const wijzigOpmaak = () => {
    let lijst = document.querySelector("ul");
    lijst.classList.toggle("wijziging");
}

window.addEventListener("load", setup);