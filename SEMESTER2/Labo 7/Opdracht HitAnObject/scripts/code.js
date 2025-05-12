let global = {
    IMAGE_COUNT: 5,              // aantal figuren (0 t.e.m. 5 → 6 afbeeldingen)
    IMAGE_SIZE: 48,              // grootte van de afbeelding in pixels
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,            // tijd tot volgende beweging (niet gebruikt in huidige versie)
    score: 0,
    timeoutId: 0
};

const setup = () => {
    let btnStart = document.getElementById("btnStart");
    let afbeelding = document.getElementById("img");

    btnStart.addEventListener("click", () => {
        global.score = 0;
        vernieuwAantalHits();
        toonNieuweAfbeelding();
    });

    afbeelding.addEventListener("click", () => {
        if (afbeelding.src.includes("0.png")) {
            alert("GAME OVER!");
            global.score = 0;
            clearTimeout(global.timeoutId);
        } else {
            global.score++;
            vernieuwAantalHits();
            toonNieuweAfbeelding();
        }
    });
};

const vernieuwAantalHits = () => {
    document.getElementById("aantalHits").textContent = "Aantal hits: " + global.score;
};

const toonNieuweAfbeelding = () => {
    let afbeelding = document.getElementById("img");
    let playField = document.getElementById("playField");

    let i = Math.floor(Math.random() * (global.IMAGE_COUNT + 1));
    afbeelding.src = global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX;

    let maxX = playField.clientWidth - global.IMAGE_SIZE;
    let maxY = playField.clientHeight - global.IMAGE_SIZE;
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);

    afbeelding.style.position = "absolute";
    afbeelding.style.left = x + "px";
    afbeelding.style.top = y + "px";
    afbeelding.style.width = global.IMAGE_SIZE + "px";
    afbeelding.style.height = global.IMAGE_SIZE + "px";
};

window.addEventListener("load", setup);
