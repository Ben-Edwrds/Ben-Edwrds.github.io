const setup = () => {
    let btnValideer = document.getElementById("btnToon");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    let roker = document.getElementById("chkSmoker");
    let favorieteBuurland = document.getElementById("selFavorieteBuurlanden");
    let moedertaalNL = document.getElementById("rbtMoedertaalNL");
    let moedertaalFR = document.getElementById("rbtMoedertaalFR");
    let moedertaalEN = document.getElementById("rbtMoedertaalEN");

    if (roker.checked) {
        console.log("roker");
    } else {
        console.log("geen roker");
    }

    if (moedertaalNL.checked) {
        console.log("Nederlands");
    } else if (moedertaalFR.checked) {
        console.log("Frans");
    } else if (moedertaalEN.checked) {
        console.log("Engels");
    }

    console.log("favoriete buurland is: " + favorieteBuurland.value);

    const bestellingen = document.getElementById("selOrder");
    let selectedValues = [];

    for (const option of bestellingen.options) {
        if (option.selected) {
            selectedValues.push(option.value);
        }
    }

    if (selectedValues.length > 0) {
        console.log("bestelling bestaat uit: " + selectedValues.join(", "));
    } else {
        console.log("geen bestelling geplaatst");
    }
};

window.addEventListener("load", setup);
