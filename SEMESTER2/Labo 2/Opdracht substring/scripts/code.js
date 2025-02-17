const setup = () => {
    let btnSubstring = document.getElementById('btnSubstring');
    btnSubstring.addEventListener('click', Substring);
};

const Substring = () => {
    let input = document.getElementById('txtInput').value;
    let getal1 = parseInt(document.getElementById('numInput1').value, 10);
    let getal2 = parseInt(document.getElementById('numInput2').value, 10);
    document.getElementById("txtOutput").innerHTML = input.substring(getal1, getal2);
};

window.addEventListener("load", setup);
