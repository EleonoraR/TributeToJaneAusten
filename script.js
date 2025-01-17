 // Lightbox for Images
 document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".lightbox-img");
    const lightbox = document.createElement("div");
    const lightboxImage = document.createElement("img");

    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "none";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = 1000;

    lightboxImage.style.maxWidth = "90%";
    lightboxImage.style.maxHeight = "90%";

    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    images.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImage.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Random Quote Display
    const quotes = [
      "There is no charm equal to tenderness of heart.",
      "A person who can write a long letter with ease, cannot write ill.",
      "It isn't what we say or think that defines us, but what we do."
    ];

    const quoteButton = document.getElementById("quote-btn");
    const quoteDisplay = document.getElementById("random-quote");

    quoteButton.addEventListener("click", () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteDisplay.textContent = randomQuote;
    });

    // Music Player Toggle
    const audio = document.getElementById("music-player");
    const musicButton = document.getElementById("music-btn");

    musicButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        musicButton.textContent = "Pause Music";
      } else {
        audio.pause();
        musicButton.textContent = "Play Music";
      }
    });
  });