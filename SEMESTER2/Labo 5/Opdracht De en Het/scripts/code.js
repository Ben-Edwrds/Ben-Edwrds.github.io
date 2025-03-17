const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx = result.toLowerCase().indexOf(oud.toLowerCase());

    while (idx !== -1) {
        let voor = result.slice(0, idx);
        let na = result.slice(idx + oud.length);
        result = voor + nieuw + na;
        idx = result.toLowerCase().indexOf(oud.toLowerCase(), idx + nieuw.length);
    }

    return result;
};

const setup = () => {
    let btnSend = document.getElementById("btnSend");

    btnSend.addEventListener("click", () => {
        let inputField = document.getElementById("invoer");
        let outputField = document.getElementById("output");
        let inputTekst = inputField.value;

        let outputTekst = vervangAlles(inputTekst, "de", "het");
        outputField.textContent = outputTekst;
    });
};

window.addEventListener("load", setup);
