
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

    }, 100)
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
window.addEventListener('keydown', function(x){
    const audio= document.querySelector(`audio[data-key="${x.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
})