const setup = () => {
    let gok = prompt("Raadt een getal");
    while(hogerLager(parseInt(gok)) !== "klopt") {
        gok = prompt("Raadt een getal");
    }



}

const hogerLager = (gok) => {
    let random = Math.random();
    if(gok > Math.ceil(random*100)) {
        alert("lager");
    } else if (gok < Math.ceil(random*100)) {
        alert("hoger")
    } else {
        return "klopt";
    }
}
window.addEventListener("load", setup);