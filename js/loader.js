let loadedFrames = 0;
let heroReady = false;

const loader = document.getElementById("loader");
const progressBar = document.querySelector(".loader-progress");
const loadingText = document.getElementById("loadingText");

function updateLoader() {

    const percent = Math.floor(
        (loadedFrames / CONFIG.frameCount) * 100
    );

    progressBar.style.width = percent + "%";
    loadingText.textContent = percent + "%";

}

function loadFrame(index) {

    const img = new Image();

    img.src =
        CONFIG.imagePath +
        String(index + 1).padStart(6, "0") +
        CONFIG.extension;

    img.onload = () => {

        images[index] = img;

        loadedFrames++;

        updateLoader();

        if (!heroReady && loadedFrames >= CONFIG.preloadFrames) {

            heroReady = true;

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

            drawFrame(0);

            requestAnimationFrame(() => {
                resizeCanvas();
            });

        }

    };

}

for (let i = 0; i < CONFIG.frameCount; i++) {

    loadFrame(i);

}