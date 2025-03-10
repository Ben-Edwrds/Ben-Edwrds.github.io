const setup = () => {
    let voornaam = prompt("Wat is uw voornaam");
    let leeftijd = prompt("Wat is uw leeftijd");
    let kleur = prompt("Wat is uw favoriete kleur");
    alert("Hallo " + voornaam + ", jij bent " + leeftijd + " jaar en jouw favoriete kleur is " + kleur + ".");
}
window.addEventListener("load", setup);