const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d", {
    alpha: false
});

const images = [];

let currentFrame = 0;

function resizeCanvas() {

    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawFrame(currentFrame);

}

function drawFrame(index){

    currentFrame = index;

    const img = images[index];

    if(!img) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;

    ctx.clearRect(0,0,cw,ch);

    const scale = Math.max(
        cw / img.width,
        ch / img.height
    );

    const width = img.width * scale;
    const height = img.height * scale;

    const x = (cw - width) * 0.5;
    const y = (ch - height) * 0.5;

    ctx.drawImage(
        img,
        x,
        y,
        width,
        height
    );

}

window.addEventListener("resize", resizeCanvas);