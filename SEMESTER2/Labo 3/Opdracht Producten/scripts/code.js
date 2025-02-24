const setup = () => {
    let herbereken = document.getElementById('btnHerbereken');
    herbereken.addEventListener('click', Herbereken);
}

const Herbereken = () => {
    let prijs1 = parseFloat(document.getElementById('prijs1').textContent.replace(" Eur", "").trim());
    let aantal1 = parseInt(document.getElementById('aantal1').value);
    let btw1 = parseFloat(document.getElementById('btw1').textContent.replace("%", "").trim()) / 100;
    let subtotaal1 = (prijs1 * aantal1) + ((prijs1 * aantal1) * btw1);
    document.getElementById('subtotaal1').textContent = subtotaal1.toFixed(2) + " Eur";


    let prijs2 = parseFloat(document.getElementById('prijs2').textContent.replace(" Eur", "").trim());
    let aantal2 = parseInt(document.getElementById('aantal2').value);
    let btw2 = parseFloat(document.getElementById('btw2').textContent.replace("%", "").trim()) / 100;
    let subtotaal2 = (prijs2 * aantal2) + ((prijs2 * aantal2) * btw2);
    document.getElementById('subtotaal2').textContent = subtotaal2.toFixed(2) + " Eur";


    let prijs3 = parseFloat(document.getElementById('prijs3').textContent.replace(" Eur", "").trim());
    let aantal3 = parseInt(document.getElementById('aantal3').value);
    let btw3 = parseFloat(document.getElementById('btw3').textContent.replace("%", "").trim()) / 100;
    let subtotaal3 = (prijs3 * aantal3) + ((prijs3 * aantal3) * btw3);
    document.getElementById('subtotaal3').textContent = subtotaal3.toFixed(2) + " Eur";


    let totaal = subtotaal1 + subtotaal2 + subtotaal3;
    document.getElementById("totaal").textContent = totaal.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);
