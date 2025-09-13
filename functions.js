// Class Toggle
var btn = document.querySelector(".button");
if (btn) {
    btn.addEventListener("click", function(event) {
        btn.classList.toggle("paused");
        event.preventDefault();
    });
}
// Play/Pause Toggle
var theAudio = document.getElementById("audio");
var isPlaying = false;
function togglePlay() {
    if (isPlaying) {
        theAudio.pause();
    } else {
        theAudio.play();
    }
}
theAudio.onplaying = function() {
    isPlaying = true;
};
theAudio.onpause = function() {
    isPlaying = false;
};
