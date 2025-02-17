const setup = () => {
    alert('Alert');

    let confirmTest = confirm("Wil je doorgaan?");
    console.log(confirmTest);

    let promptTest = prompt("Prompt:");
    console.log(promptTest);
}
window.addEventListener("load", setup);