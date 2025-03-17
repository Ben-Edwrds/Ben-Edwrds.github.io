const setup = () => {
    let img = document.getElementById('imgPhoto');
    img.addEventListener('mouseover', wijziging);
}
const wijziging = () => {
    img.innerHTML = "<img src=Images/"
}
window.addEventListener("load", setup);