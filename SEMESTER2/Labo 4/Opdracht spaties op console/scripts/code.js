const setup = () => {
    let buttonTransform = document.getElementById('btnTransform');
    buttonTransform.addEventListener('click', stringWijzigen);
}

const stringWijzigen = () => {
    let tekst = document.getElementById('tekstVeld').value;
    let resultaat = "";
    for (let i = 0; i < tekst.length; i++) {
        if(tekst[i] !== " ") {
            resultaat += tekst[i] + " ";
        }
    }
    console.log(resultaat);
}

window.addEventListener("load", setup);
