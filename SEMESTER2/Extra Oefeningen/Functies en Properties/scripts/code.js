const setup = () => {
    let breedte = prompt("Geef de breedte.");
    let hoogte = prompt("Geef de hoogte.");
    console.log(berekenOppverlakte(breedte, hoogte) + " m²");

    let getal = prompt("Geef een getal.");
    if(isEven(parseInt(getal))) {
        console.log("Het getal is even.");
    } else {
        console.log("Het getal is oneven.");
    }
}

const berekenOppverlakte = (breedte, hoogte) => {
    return breedte * hoogte;
}

const isEven = (getal) => {
    return getal % 2 === 0;
}
window.addEventListener("load", setup);