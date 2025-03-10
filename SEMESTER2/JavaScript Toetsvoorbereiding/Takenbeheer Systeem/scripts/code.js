const setup = () => {
    //Stap 1
    alert("Welkom!");
    let naam = prompt("Wat is uw naam?");
    alert("Hallo " + naam);

    //Stap 2
    let taken = [];
    let taak = prompt("Wat zijn uw taken?");
    while(taak !== "") {
        taken.push(taak);
        taak = prompt("Hebt u nog andere taken?");
    }

    //Stap 3
    for (let i = 0; i < taken.length; i++) {
        console.log(i+1 + ": " + taken[i]);
    }

    //Stap 4
    let sorteren = confirm("Wilt u de lijst alfabetisch sorteren?");
    if(sorteren) {
        taken.sort();
        for (let i = 0; i < taken.length; i++) {
            console.log(i+1 + ": " + taken[i]);
        }
    }

    //Stap 5
    let verwijderen = confirm("Wilt u een taak verwijderen?");
    if(verwijderen) {
        let taaknummer = prompt("Wat is het taaknummer dat u wilt verwijderen?");
        taken.splice(parseInt(taaknummer)-1, 1);
        for (let i = 0; i < taken.length; i++) {
            console.log(i+1 + ": " + taken[i]);
        }
    }

    //Stap 6
    confirm("Hebt u een taak voltooid?");
    let taaknummer = prompt("Geef het taaknummer van de voltooide taak.");
    for(let i = 0; i < taken.length; i++) {
        console.log(i+1 + ": " + taken[i]);
        if(i +1 === parseInt(taaknummer)) {
            console.log(i+1 + ": " + taken[i] + " **COMPLETED**");
        }
    }
}
window.addEventListener("load", setup);