const setup = () => {
    let button = document.getElementById("btnWijzig");
    addEventListener("click", wijzigOpmaak)
}
const wijzigOpmaak = () => {
    let lijst = document.querySelector("ul");
    lijst.classList.toggle("wijziging");
}

window.addEventListener("load", setup);