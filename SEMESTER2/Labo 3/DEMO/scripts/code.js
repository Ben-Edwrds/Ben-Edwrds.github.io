const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", () => {
        document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
    });

    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

}


// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //1e manier
        //listItems[i].style.listStyleType = "none";
        //listItems[i].style.backgroundColor = "red";

        //2e manier
        //listItems[i].className = "listItemStyleNone colorRed";

        //3e manier
        listItems[i].classList.remove("listItemStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemStyleNone");
        listItems[i].classList.add("colorRed");
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //1e manier
        //listItems[i].style.listStyleType = "disc";
        //listItems[i].style.backgroundColor = "white";

        //2e manier
        //listItems[i].className = "listItemStyleDisc colorWhite";

        //3e manier
        listItems[i].classList.remove("listItemSTyleNone");
        listItems[i].classList.remove("colorRed");
        listItems[i].classList.add("listItemStyleDisc");
        listItems[i].classList.add("colorWhite");
    }
}
const changeContent = () => {
    document.getElementById("textContent")
        .textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML")
        .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);