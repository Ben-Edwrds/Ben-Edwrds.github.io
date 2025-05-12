const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", event => {
        zoekOpdrachtUitvoeren();
    })
    restoreHistory();
}

const creatElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = creatElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}

const zoekOpdrachtHistory = (url) => {
    window.open(url, "_blank");
}
const storeHistory = (url, color) => {
    let cards = [];
    let cardTitels = document.getElementsByClassName("card-title");
    let cardTeksten = document.getElementsByClassName("card-text");

    for (let i = 0; i < cardTitels.length; i++) {
        cards.push({
            title: cardTitels[i].innerText,
            text: cardTeksten[i].innerText,
            url: url,
            color: color
        });
    }

    localStorage.setItem("cardElementen", JSON.stringify(cards));
}

const restoreHistory = () => {
    let jsonText = localStorage.getItem("cardElementen");
    if (jsonText != null) {
        let cards = JSON.parse(jsonText);
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            createCardAppend(card.title, card.text, card.url, card.color);
        }
    }
}

const createCardAppend = (title, commandosuffix, url, color) => {
    let col4 = creatElementWithClassName("div", "col-4");
    let card = creatElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase()+"-card");
    let cardBody = creatElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title",title);
    let cardText = createElementWithClassNameAndText("p", "card-text", commandosuffix);
    let cardButton = createElementWithClassNameAndText("button", "card-button", "Go!");
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    card.appendChild(cardBody);
    col4.appendChild(card);
    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
    card.style.backgroundColor = color;
    card.style.color = "white";
    cardButton.style.backgroundColor = "black";
    cardButton.style.color = "white";
    cardButton.addEventListener("click", event => {
        zoekOpdrachtHistory(url);
    })
    storeHistory(url, color);
}

const zoekOpdrachtUitvoeren = (character, zoekOpdracht) => {
    let txtInput = document.getElementById("zoekVeld").value.trim();
    let arrayZoekOpdrachtenCharacter = txtInput.split(" ");
    let char = arrayZoekOpdrachtenCharacter[0].toLowerCase();
    let zoekTerm = "";
    for (let i = 1; i < arrayZoekOpdrachtenCharacter.length; i++) {
        zoekTerm += arrayZoekOpdrachtenCharacter[i] + " ";
    }
    if(char === "/y") {
        let url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(zoekTerm);
        window.open(url, "_blank");
            createCardAppend("Youtube", zoekTerm, url, "red");
    } else if (char === "/g") {
        let url = "https://www.google.com/search?q=" + encodeURIComponent(zoekTerm);
        window.open(url, "_blank");
        createCardAppend("Google", zoekTerm, url, "darkBlue");
    } else if (char === "/x") {
        let url = "https://www.x.com/search?q=" + encodeURIComponent(zoekTerm);
        window.open(url, "_blank");
        createCardAppend("X", zoekTerm, url, "lightBlue");
    } else if (char === "/i") {
        let url = "https://www.instagram.com/results?search_query=" + encodeURIComponent(zoekTerm);
        window.open(url, "_blank");
        createCardAppend("Instagram", zoekTerm, url, "pink");
    } else {
        alert("Kies tussen: /y, /g, /x of /i");
    }
}
window.addEventListener("load", setup);