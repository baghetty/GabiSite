document.addEventListener("DOMContentLoaded", function () {
  // Helper functie om "nee" knop functionaliteit toe te voegen (verplaatsen + 25 clicks alert)
  function noButtonHandler(button) {
    let offset = 0;
    let clickCount = 0;

    button.addEventListener('click', () => {
      offset += 30;
      
      button.style.transform = `translateX(${offset}px)`;
      clickCount++;

      if (clickCount === 25) {
        alert("You fr pressed 25 times on no? That's craaazyyy, head back to the home page.");
        window.history.back();
      }
    });
  }

  // Elementen buiten popup
  const noBtn = document.getElementById('no-button');
  const yesBtn = document.querySelector('.yes');
  const popup = document.getElementById('popup');

  // Voeg "nee" functionaliteit toe aan de hoofd "nee" knop
  if (noBtn) {
    noButtonHandler(noBtn);
  }

  // "ja" knop opent popup
  if (yesBtn && popup) {
    yesBtn.addEventListener('click', () => {
      popup.classList.remove('hidden');
      popup.classList.add('visible');

      const popupContent = popup.querySelector('.popup-content');

      // Maak popup "nee" knop
      const popupNoBtn = document.createElement('button');
      popupNoBtn.classList.add('no');
      popupNoBtn.textContent = "Nee";

      // Voeg toe aan popup-content
      popupContent.appendChild(popupNoBtn);

      // Voeg functionaliteit toe aan popup "nee"
      noButtonHandler(popupNoBtn);
    });
  }

  // Rest van je andere code, bv links, emoji buttons, etc
  const links = document.querySelectorAll(".table-link");
  if (links.length > 0) {
    const flowerButton = document.getElementById("flower-button");
    const ringButton = document.getElementById("ring-button");
    const babyButton = document.getElementById("baby-button");

    const flowerContainer = document.getElementById("flower-container");
    const ringContainer = document.getElementById("ring-container");
    const babyContainer = document.getElementById("baby-container");

    const clickedSet = new Set();

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const key = this.innerText.trim();

        if (!clickedSet.has(key)) {
          clickedSet.add(key);
          console.log("Geklikt:", key);
        }

        if (clickedSet.size === links.length) {
          const popup = document.getElementById("popup");
          if (popup) {
            popup.classList.remove("hidden");
            popup.classList.add("visible");
          }
        }
      });
    });

    flowerButton?.addEventListener("click", function (e) {
      e.preventDefault();
      flowerContainer.innerHTML = "🌸";
    });

    ringButton?.addEventListener("click", function (e) {
      e.preventDefault();
      ringContainer.innerHTML = "💍";
    });

    babyButton?.addEventListener("click", function (e) {
      e.preventDefault();
      babyContainer.innerHTML = "👶";
    });
  }
});
