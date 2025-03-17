const setup = () => {
    let button = document.getElementById("btnTrigram");
    button.addEventListener("click", trigram);
}
const trigram = () => {
    let woord = document.getElementById("tekstVak").value;
    let output = document.getElementById("lstOutput");
    for (let i = 0; i < woord.length-2; i++) {
        output.innerHTML += woord.slice(i, i+3) + "<br />";
    }
}
window.addEventListener("load", setup);