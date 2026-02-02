// contador de visitas (local, fake, honesto)
let visitas = localStorage.getItem("visitasBlog");
if (!visitas) visitas= 1;
else visitas = parseInt(visitas) + 1;

localStorage.setItem("visitasBlog", visitas);

document.addEventListener("DOMContentLoaded", () => {
    let contador = document.getElementById("contador");
    if (contador) contador.innerText = visitas;
});

const music = document.getElementById("player");

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;
}

function toggleWinamp() {
    const winamp = document.getElementById("winamp");
    winamp.classList.toggle("minimized");
}
