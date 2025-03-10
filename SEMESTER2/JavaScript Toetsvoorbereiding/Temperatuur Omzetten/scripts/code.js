const setup = () => {
    let temperatuur = prompt("Wat is de temperatuur? (in Celsius)");
    let farenheit = parseInt(temperatuur)*9/5+32;
    console.log(farenheit);
    alert(farenheit);
}
window.addEventListener("load", setup);