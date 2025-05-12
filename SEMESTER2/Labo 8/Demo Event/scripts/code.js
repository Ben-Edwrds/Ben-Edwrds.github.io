const setup = () => {
    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInhoud((evenement));
}
const toonEvenementInhoud = (evenement) => {
    console.log("Evenement: " + evenement.naam);
    console.log(evenement.datum);
    console.log(evenement.locatie);
    console.log(evenement.deelnemers.join(", "));
    console.log(dagenTotEvenement(evenement));
}

const dagenTotEvenement = (evenement) => {
    return Math.ceil((evenement.datum - new Date()) / (1000 * 3600 *24));
}
window.addEventListener("load", setup);