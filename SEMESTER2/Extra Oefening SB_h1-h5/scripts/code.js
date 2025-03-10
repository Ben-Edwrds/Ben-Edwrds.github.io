const setup = () => {
    alert("Welkom bij mijn voorbereiding op de toets van 11/03/2025");
    let naam = prompt("Wat is uw naam?");
    alert("Hallo " + naam + "!");

    let taken = [];
    let taak = prompt("Voeg hier een taak toe.");
    while(taak !== "") {
        taken.push(taak);
        taak = prompt("Voeg hier een taak toe.")
    }

    console.log("*****Stap 4*****");
    for(let i = 0; i < taken.length; i++) {
        console.log(taken[i]);
    }

    console.log("*****Stap 5*****");
    let sorteren = confirm("Taken alfabetisch sorteren?");
    if(sorteren === true) {
        taken.sort();
        for(let i = 0; i < taken.length; i++) {
            console.log(taken[i]);
        }
    }

    let verwijderen = confirm("Wil je een taak verwijderen?");
    if(verwijderen) {
        let taaknummer = prompt("Geef de taaknummer die u wenst te verwijderen: ");
        taken.splice(parseInt(taaknummer), 1);
    }
    console.log("*****Stap 7*****");
    for(let i = 0; i < taken.length; i++) {
        console.log(taken[i]);
    }


}



window.addEventListener("load", setup);