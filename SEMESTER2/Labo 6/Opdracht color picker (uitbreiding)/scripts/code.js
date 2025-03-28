const setup = () => {
    let swatch=document.getElementsByClassName("swatch");
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("btnSave");
    button.addEventListener("click", save);

   for(let i = 0; i < sliders.length; i++) {
       sliders[i].addEventListener("change", update);
       sliders[i].addEventListener("input", update);
   }
    swatch[0].style.backgroundColor="red";
    swatch[1].style.backgroundColor="green";
    swatch[2].style.backgroundColor="blue";
}

const update = () => {
   let red=document.getElementById("sldRed").value;
   let green=document.getElementById("sldGreen").value;
   let blue=document.getElementById("sldBlue").value;
   document.getElementById("lblRed").innerHTML = red;
   document.getElementById("lblGreen").innerHTML = green;
   document.getElementById("lblBlue").innerHTML = blue;
   swatch.style.backgroundColor= "rgb("+red+", "+green+", "+blue+")";
}

const save = () => {
    let kleur = document.getElementById("swatch").style.backgroundColor;

    let nieuweSwatch = document.createElement("div");
    nieuweSwatch.classList.add("swatch");
    nieuweSwatch.style.backgroundColor = kleur;

    let kruisje = document.createElement("span");
    kruisje.textContent = "x";
    kruisje.classList.add("delete-btn");
    kruisje.onclick = () => nieuweSwatch.remove();

    nieuweSwatch.appendChild(kruisje);
    document.getElementById("copySwatch").appendChild(nieuweSwatch);
};


window.addEventListener("load", setup);