// ============================
// SolidFund — ui.js
// ============================

// Ce fichier est une copie fidèle du module d’interface utilisateur
// original (c29e803e-0e68-467d-ac3a-0ac4b2a6d3be.js). Il gère les
// interactions liées au menu profil et peut être utilisé par toutes
// les pages via une importation simple (script src="ui.js").

// Gestion du menu profil (affichage / masquage)
function initProfileMenu() {
  const btn = document.getElementById("sf-profile-toggle");
  const dd = document.getElementById("sf-profile-dropdown");
  if (!btn || !dd) return;

  let open = false;
  const toggle = (state) => {
    open = state;
    dd.style.display = open ? "flex" : "none";
    btn.setAttribute("aria-expanded", open);
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle(!open);
  });

  document.addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggle(false);
  });
}