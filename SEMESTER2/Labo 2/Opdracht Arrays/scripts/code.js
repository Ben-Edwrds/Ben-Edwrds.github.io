const setup = () => {
    let familieLeden = ['Jan', 'Piet', 'Hans', 'Koen', 'Dries'];

    console.log(familieLeden.length);

    console.log(familieLeden[0], familieLeden[2], familieLeden[4]);


    voegNaamToe(familieLeden);
    console.log(familieLeden.join(" - "));
}

const voegNaamToe = (arr) => {
    arr.push(prompt('Geef nog een familielid'));
}

window.addEventListener("load", setup);



