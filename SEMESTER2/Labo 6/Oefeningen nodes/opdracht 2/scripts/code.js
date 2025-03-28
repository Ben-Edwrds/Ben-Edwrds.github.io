const setup = () => {
 let lis=document.querySelectorAll("li");
 for (let i=0;i<lis.length;i++) {
     lis[i].setAttribute('class', 'listItem');
 }

let img = document.createElement("img");
 document.querySelector("body").appendChild(img);
 img.setAttribute('src', 'images/69972900.jpg');
}
window.addEventListener("load", setup);