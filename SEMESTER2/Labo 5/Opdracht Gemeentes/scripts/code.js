const setup = () => {
    let gemeenten = [];
    let select = document.getElementById("inputGemeentes");
    let prompt1;

    prompt1 = prompt("Geef gemeents, type 'stop' om het programma te stoppen");
    while(prompt1.localeCompare("stop") !== 0){
        if (prompt1) gemeenten.push(prompt1);
        prompt1 = prompt("Geef gemeents, type 'stop' om het programma te stoppen");
    }

    gemeenten.sort();

    for (let i = 0; i < gemeenten.length; i++) {
        select.innerHTML += `<option value="${gemeenten[i]}">${gemeenten[i]}</option>`;
    }
};

window.addEventListener("load", setup);