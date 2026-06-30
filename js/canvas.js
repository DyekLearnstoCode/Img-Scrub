const canvas = document.getElementById("heroCanvas");

const ctx = canvas.getContext("2d", {
    alpha: false,
    desynchronized: true
});

const images = [];

let currentFrame = 0;

let canvasWidth = 0;
let canvasHeight = 0;

let drawWidth = 0;
let drawHeight = 0;
let drawX = 0;
let drawY = 0;

function resizeCanvas() {

    const dpr = window.devicePixelRatio || 1;

    canvasWidth = canvas.clientWidth;
    canvasHeight = canvas.clientHeight;

    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawFrame(currentFrame);

}

function calculateCover() {

    const img = images[currentFrame] || images[0];

    if (!img) return;

    const imageRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    if (canvasRatio > imageRatio) {

        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imageRatio;

    } else {

        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imageRatio;

    }

    drawX = (canvasWidth - drawWidth) * 0.5;
    drawY = (canvasHeight - drawHeight) * 0.5;

}

function drawFrame(index) {

    currentFrame = index;

    const img = images[index];

    if (!img) return;

    ctx.drawImage(
        img,
        drawX,
        drawY,
        drawWidth,
        drawHeight
    );

}

window.addEventListener("resize", resizeCanvas);