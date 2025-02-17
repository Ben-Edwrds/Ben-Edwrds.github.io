const setup = () => {
    let button = document.getElementById("wijzigTekst");
    button.addEventListener("click", tekstWijzigen);
};

const tekstWijzigen = () => {
    if(document.getElementById("txtOutput").innerHTML === "Hello world!") {
        document.getElementById("txtOutput").innerHTML = "Welkom!";
    } else {
        document.getElementById("txtOutput").innerHTML = "Hello world!";
    }
};

window.addEventListener("load", setup);
