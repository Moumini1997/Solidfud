// ============================
// SolidFund — animations.js
// ============================

// Ce fichier est une copie fidèle du module d’animations original
// (d0ed6e42-d4ad-453c-9409-ff94287874a2.js). Il gère l’animation
// automatique des cartes dans la section "Comment ça marche".

// Animation automatique des cartes "Comment ça marche"
function initProjectAnimation() {
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;

  let index = 0;
  cards[index].classList.add("active");

  setInterval(() => {
    const current = cards[index];
    index = (index + 1) % cards.length;
    const next = cards[index];

    current.classList.remove("active");
    current.classList.add("exit");

    setTimeout(() => {
      cards.forEach((c) => c.classList.remove("exit"));
      next.classList.add("active");
    }, 200);
  }, 3000);
}