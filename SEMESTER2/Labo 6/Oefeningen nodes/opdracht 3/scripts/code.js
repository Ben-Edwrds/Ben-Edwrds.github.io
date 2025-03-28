const setup = () => {
    let btnAppend = document.getElementById("btnAppend");
    btnAppend.addEventListener("click", append);
    let par = document.querySelectorAll("p")[0];
    let y = par.childNodes[0];
    par.removeChild(y);

}

const append = () => {
    let p = document.getElementById("p");

}
window.addEventListener("load", setup);