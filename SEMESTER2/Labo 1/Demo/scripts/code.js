const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    let btnSend = document.getElementById("btnSend");

    if (lblCursus) {
        lblCursus.addEventListener("mouseover", change);
    }

    if (btnSend) {
        btnSend.addEventListener("click", show);
    }
};

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    if (lblCursus) {
        lblCursus.className = "cursus";
    }
};

const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName && txtName.value.trim() !== "") {
        let name = txtName.value.trim();
        alert("Jouw naam is " + name);
        console.log("Jouw naam is " + name);
        terroristDetection(name); // Functie aanroepen
    } else {
        alert("Voer een naam in.");
    }
};

const terroristDetection = (name) => {
    if (name.toLowerCase() === "adrian") {
        console.log("Terrorist detected");
    } else if(name.toLowerCase() === "Ian-Thomas") {
        console.log("gooner detected");
    } else {
        console.log("ian haters detected");
    }
};

window.addEventListener("load", setup);
