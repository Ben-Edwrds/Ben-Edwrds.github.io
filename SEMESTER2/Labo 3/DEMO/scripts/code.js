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

// mouseHoverFunction
const mouseHover = () => {


}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

window.addEventListener("load", setup);