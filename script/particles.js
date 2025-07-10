window.onload = function () {
  const imagePaths = [
    "img/image.jpg", "img/image2.jpg", "img/0CAC8F87-148E-49A8-A1CB-1918936AC678.jpg",
    "img/1F94E6FA-BD79-4E9B-A217-0E155CEE56FD.jpg", "img/26C16A67-AD1A-46A5-AF92-BA4DCBE48B04.jpg",
    "img/2DE9764F-685A-4BB0-B330-DD438F3B6ABF.jpg", "img/6F13E962-01D1-42DF-8E5E-D0404350CEEE.jpg",
    "img/703411CA-45B9-4C86-90EF-41F6014FAFCE.jpg", "img/E42719DE-6651-41B7-88FB-5109EF2B6BEE.jpg",
    "img/IMG_7703.JPEG", "img/IMG_7704.JPEG", "img/IMG_7705.JPEG", "img/IMG_7706.JPEG", "img/IMG_7707.JPEG",
    "img/IMG_8260.JPEG", "img/IMG_8261.JPEG", "img/IMG_8340.JPEG", "img/IMG_8480.JPEG",
    "img/IMG_8481.JPEG", "img/IMG_8483.JPEG", "img/IMG_8501.JPEG", "img/IMG_8933.jpg"
  ];

    const totalParticles = 100;
    const body = document.body;
    const usedImages = [];

    // Zorg dat elke afbeelding minstens 1x getoond wordt
    imagePaths.forEach(src => {
      createFloatingImage(src);
      usedImages.push(src);
    });

    // Voeg extra willekeurige afbeeldingen toe tot totaalParticles
    for(let i = usedImages.length; i < totalParticles; i++) {
      const randomSrc = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      createFloatingImage(randomSrc);
    }

  // Gebruik aparte functie om image te maken
  function createFloatingImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.className = "floating-image"
    img.style.top = `${Math.random() * window.innerHeight}px`;
    img.style.left = `${Math.random() * window.innerWidth}px`;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "50%";
    img.style.opacity = `${0.4 + Math.random() * 0.6}`;
    img.style.filter = "drop-shadow(0 0 5px rgb(255, 120, 246))";
    img.style.animation = "float 10s infinite ease-in-out";
    img.style.animationDuration = `${5 + Math.random() * 10}s`;
    img.style.animationDelay = `${Math.random() * 5}s`;

    img.onerror = () => {
      console.error("Image failed to load:", img.src);
    };

    // Click to enlarge
    img.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");

      lightboxImg.src = img.src;
      lightboxImg.classList.add("zoomed");
      lightbox.style.display = "flex";
    });

    document.body.appendChild(img);
  }

  // Stap 1: Toon elk pad minstens 1 keer
  imagePaths.forEach((path) => {
    createFloatingImage(path);
  });

  // Stap 2: Vul aan met random images tot totalParticles
  const remaining = totalParticles - imagePaths.length;
  for (let i = 0; i < remaining; i++) {
    const randomPath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    createFloatingImage(randomPath);
  }

  // ESC key sluit lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // Klik buiten image sluit lightbox
  document.getElementById("lightbox").addEventListener("click", () => {
    closeLightbox();
  });

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "none";
    lightboxImg.classList.remove("zoomed");
  }
};
