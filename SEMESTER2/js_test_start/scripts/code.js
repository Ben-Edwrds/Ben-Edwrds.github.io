const setup = () => {
    let met = document.getElementById('metEi');
    met.addEventListener('click', (metEi));
    met.addEventListener('click', (telZinTekst));

    let zonder = document.getElementById('zonderEi');
    zonder.addEventListener('click', (zonderEi));
    zonder.addEventListener('click', (telZinTekst));


}

const metEi = () => {
    let img = document.getElementById('img');
    img.src("with-egg.png");
    img.classList.remove('hidden');
}

const zonderEi = () => {
    let img = document.getElementById('img');
    img.src("without-egg.png");
    img.classList.remove('hidden');
}

const telZIndex = (tekst, zoekwoord) => {
    let index = 0;
    let count = 0;
    while ((index = tekst.indexOf(zoekwoord, index)) !== -1) {
        count++;
        index++;
    }
    return count;
}

const telZinTekst = () => {
    let tekst = document.getElementById('tekstAn').value.toLowerCase();
    let zoekwoord = "z";
    let aantal = telZIndex(tekst, zoekwoord);
    console.log("Z komt " + aantal + " keer voor.");
}
window.addEventListener("load", setup);