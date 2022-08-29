// REDIRECT

function goto(url) {
    if(url.startsWith('http') || url.startsWith('https') || url.startsWith('mail') || url.startsWith('tel:')){
        window.open(url)
    } else {
        location.href = url;
    }
}

// COPY ON CLIPBOARD

let copyClipboard = (txt) => {
    navigator.clipboard.writeText(txt);
}

// @MEDIA

function checkMedia(mLg, mMd, mSm) {
    if(mLg.matches) { console.log("[MEDIA] desktop") }
    if(mMd.matches) { console.log("[MEDIA] tablet") }
    if(mSm.matches) { console.log("[MEDIA] mobile") }
  }
  
  var mediaLG = window.matchMedia("(min-width: 1024px)")
  var mediaMD = window.matchMedia("(min-width: 568px) and (max-width:1023px)")
  var mediaSM = window.matchMedia("(max-width: 567px)")
  checkMedia(mediaLG, mediaMD, mediaSM)
  mediaLG.addListener(checkMedia)
  mediaMD.addListener(checkMedia)
  mediaSM.addListener(checkMedia)

// CAROSELLO IMMAGINI

let imgCount = 2; // immagine da cui parte il carosello
const sleepTime = 4950; // tempo tra una foto e l'altra
const imgN = 9; // numero totale delle immagini
const img = document.getElementById("carosello"); // elemento in cui viene mostrato il carosello
const description = document.getElementById("hero-desc"); //elemento in cui viene inserita la descrizione
const desc = ["apericena indimenticabili", "intrattenimento unico", "drink eccezionali", "barman esperti", "barman esperti", "alcolici mai assaggiati", "apericena indimenticabili", "ricordi", "cocktail mai visti"]
// tutte le descrizioni in ordine

let  changeImg = () => {

    if (imgCount > imgN) {
        imgCount = 1;
    }

    img.src = 'assets/imgs/carosello/photo-' + imgCount + '.jpg';
    description.innerHTML = desc[imgCount-1];

    imgCount++;

}

setInterval(changeImg, sleepTime);

// IMMAGINE RANDOM
const img2 = document.getElementById("random-img");

let  changeImg2 = () => {

    let n = (Math.floor(Math.random() * 9) + 1)

    img2.src = 'assets/imgs/carosello/photo-' + n + '.jpg';

}

changeImg2()
