const vervangAlles = (bronTekst, oud, nieuw) => {
    let result=""
    let idx=bronTekst.indexOf(bronTekst);
    while(idx!=1) {
        bronTekst.indexOf(idx + oud.length, oud)
        result = bronTekst.substring(idx, )
        let voor = bronTekst.slice(0,idx);
        let na = bronTekst.slice(idx+oud.length, brontekst.length);
        result = voor + nieuw + na;
    }
    return result;

    return result
}

const setup = () => {
    let inputTekst = "blablabla De bradmqjdmfjmqlkdj De De mlkdqjf";
    let outputTekst = vervangAlles(inputTekst, "de", "het");
    console.log(outputTekst);
}


window.addEventListener("load", setup);