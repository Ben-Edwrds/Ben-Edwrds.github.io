const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let sliders = {red: red, green: green, blue: blue};
    localStorage.setItem("sliders", JSON.stringify(sliders));
}

const restoreSliderValues = () => {
    let sliderValues;
    let sliderValuesJSON = localStorage.getItem("sliders");

    if (sliderValuesJSON === undefined) {
        sliderValues = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else {
        sliderValues = JSON.parse(sliderValuesJSON);
    }

    document.getElementById("sldRed").value = sliderValues.red;
    document.getElementById("sldGreen").value = sliderValues.green;
    document.getElementById("sldBlue").value = sliderValues.blue;

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let swatchElementen = document.querySelectorAll("#swatchComponents .swatch");

    swatchElementen.forEach(el => {
        swatches.push({
            red: el.getAttribute("data-red"),
            green: el.getAttribute("data-green"),
            blue: el.getAttribute("data-blue")})
    })
console.log(swatchElementen);
    localStorage.setItem("swatchElementen", JSON.stringify(swatches));

};




const restoreSwatches = () => {
    let jsonText = localStorage.getItem("swatchElementen");
    console.log(localStorage.getItem("swatchElementen"));
    if (jsonText != null) {
        let rgbColors = JSON.parse(jsonText);
        for (let i = 0; i < rgbColors.length; i++) {
            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};



