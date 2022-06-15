
//VARIABLE AUDIOS 
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
var audio6 = document.getElementById("audio6");
var audio7 = document.getElementById("audio7");
var audio8 = document.getElementById("audio8");
var audio9 = document.getElementById("audio9");
var audio10 = document.getElementById("audio10");


//FUNCION Click Mouse
function drumClicked(drumId, audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime = 0;
    audio.play();

    drumElement = document.getElementById(drumId)
    drumElement.classList.toggle("clicked");
    setTimeout(function () {
        drumElement.classList.toggle("clicked");

    }, 130)
}

//FUNCION CLICK MOUSE SONIDOS
document.getElementById("d1").addEventListener("mousedown", function () { drumClicked("d1", "audio1") });
document.getElementById("d2").addEventListener("mousedown", function () { drumClicked("d2", "audio2") });
document.getElementById("d3").addEventListener("mousedown", function () { drumClicked("d3", "audio3") });
document.getElementById("d4").addEventListener("mousedown", function () { drumClicked("d4", "audio4") });
document.getElementById("d5").addEventListener("mousedown", function () { drumClicked("d5", "audio5") });
document.getElementById("d6").addEventListener("mousedown", function () { drumClicked("d6", "audio6") });
document.getElementById("d7").addEventListener("mousedown", function () { drumClicked("d7", "audio7") });
document.getElementById("d8").addEventListener("mousedown", function () { drumClicked("d8", "audio8") });
document.getElementById("d9").addEventListener("mousedown", function () { drumClicked("d9", "audio9") });
document.getElementById("d10").addEventListener("mousedown", function () { drumClicked("d10", "audio10") });


//Function PLay with Keyboard
// window.addEventListener('keydown', function (x) {
//     const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
// })

window.addEventListener('keydown', function (x) {
    const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`);
    console.log(x.key);

    switch (x.key) {
        case "q":
            drumClicked("d1", "audio1")
            break;
        case "w":
            drumClicked("d5", "audio5")
            break;
        case "e":
            drumClicked("d6", "audio6")
            break;
        case "r":
            drumClicked("d2", "audio2")
            break;
        case "a":
            drumClicked("d3", "audio3")
            break;
        case "s":
            drumClicked("d7", "audio7")
            break;
        case "d":
            drumClicked("d8", "audio8")
            break;
        case "f":
            drumClicked("d4", "audio4")
            break;
        case "z":
            drumClicked("d9", "audio9")
            break;
        case "x":
            drumClicked("d10", "audio10")
            break;
    }
})


// animation

window.onscroll = function () { scrollFunction() };
var heroImg = document.querySelector(".hero-image");
function scrollFunction() {
    //cambio en navbar
    if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && window.screen.width > 768) {
        document.querySelector(".info__titulo").classList.add("smull")
    } else {
        document.querySelector(".info__titulo").classList.remove("smull")
    }
    heroImg.style.transform = "rotate(" + (window.pageYOffset / 5) + "deg)"
}
