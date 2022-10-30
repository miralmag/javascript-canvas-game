const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
    let canvasSize;
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8
    } else {
        canvasSize = window.innerHeight * 0.8
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    // context.fillRect(0,0,100,100);
    // context.clearRect(0,0,100,50);

    // context.font = "25px Verdana";
    // context.fillStyle = "purple";
    // context.textAlign = "center";
    // context.fillText('Hola', 25, 25);
}