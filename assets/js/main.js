// ============================
// SolidFund — main.js
// ============================

// Ce fichier est une copie fidèle du module principal original
// (b902055e-c01c-407d-bcec-ce87587624c0.js). Il initialise l’année du
// footer et lance les modules UI et animations une fois le DOM prêt.

// Met à jour automatiquement l’année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Initialise les modules JS une fois le DOM chargé
document.addEventListener("DOMContentLoaded", () => {
  initProfileMenu();      // depuis ui.js
  initProjectAnimation(); // depuis animations.js
});