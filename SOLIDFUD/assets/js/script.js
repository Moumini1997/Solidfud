/*
 * script.js – Gestion de la page projets.html
 *
 * Ce script construit dynamiquement la grille des projets à partir des
 * données définies dans assets/data/projects.js. Il offre un filtrage
 * par catégorie, une recherche par mots-clés et anime les barres de
 * progression pour un rendu interactif.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Éléments DOM (certains n’existent PAS sur toutes les pages)
  const globalSearchInput = document.getElementById('sf-search-input');
  const globalSearchForm  = document.getElementById('sf-search-form');

  const searchInput    = document.getElementById('project-search') || globalSearchInput;
  const filterButtons  = document.querySelectorAll('.filter-btn');
  const gridContainer  = document.getElementById('projects-grid');

  // 👉 Si on n’a PAS de grille (#projects-grid), on est sûrement sur index.html :
  //    on ne fait PAS la partie “rendu de projets”, sinon erreur.
  const hasProjectsGrid = !!gridContainer;

  // Catégorie actuellement sélectionnée
  let currentCategory = 'Tous';

  // Récupère les données de projets depuis une variable globale "projects"
  // définie dans assets/data/projects.js. Si elle n’existe pas, on met un tableau vide.
  const projectsData = Array.isArray(window.projects) ? window.projects : [];

  // Formatte un entier en francs CFA pour l’interface utilisateur
  function formatCurrency(value) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(value);
  }

  // Retourne la classe CSS du badge correspondant à la catégorie
  function getCategoryClass(cat) {
    return 'cat-' + cat;
  }

  // Anime toutes les barres de progression présentes dans la grille
  function animateProgressBars() {
    if (!hasProjectsGrid) return;
    const bars = gridContainer.querySelectorAll('.progress > div');
    bars.forEach((bar, idx) => {
      const target = parseFloat(bar.getAttribute('data-target')) || 0;
      setTimeout(() => {
        bar.style.width = target + '%';
      }, 50 + idx * 70);
    });
  }

  // Construit la grille HTML à partir d’un tableau de projets
  function renderProjects(data) {
    if (!hasProjectsGrid) return; // Sécurité : ne rien faire si pas sur projets.html

    gridContainer.innerHTML = '';
    if (!data.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Aucun projet trouvé.';
      empty.style.margin = '1rem 0';
      gridContainer.appendChild(empty);
      return;
    }

    data.forEach((proj) => {
      const percent = Math.round((proj.raised / proj.goal) * 100);
      const art = document.createElement('article');
      art.className = 'project-card';
      art.innerHTML = `
        <div class="media">
          <img src="${proj.image}" alt="${proj.title}">
          <span class="category-label ${getCategoryClass(proj.category)}">${proj.category}</span>
        </div>
        <div class="body">
          <h3 class="title">${proj.title}</h3>
          <p class="objective">${formatCurrency(proj.raised)} sur ${formatCurrency(proj.goal)}</p>
          <div class="progress"><div data-target="${percent}"></div></div>
          <p class="percentage">${percent}% collecté</p>
          <a href="projet.html?id=${proj.id}" class="btn">Voir le projet</a>
        </div>
      `;
      gridContainer.appendChild(art);
    });

    // Démarre l’animation après insertion
    requestAnimationFrame(() => {
      animateProgressBars();
    });
  }

  // Applique la recherche et le filtrage par catégorie
  function filterProjects() {
    if (!hasProjectsGrid) return;
    const term = (searchInput?.value || '').trim().toLowerCase();

    const filtered = projectsData.filter((proj) => {
      const matchCategory =
        currentCategory === 'Tous' ||
        proj.category.toLowerCase() === currentCategory.toLowerCase();

      const inTitle = proj.title.toLowerCase().includes(term);
      const inDesc  = proj.description &&
                      proj.description.toLowerCase().includes(term);

      return matchCategory && (inTitle || inDesc);
    });

    renderProjects(filtered);
  }

  // ====== FILTRES (uniquement si on a des boutons) ======
  if (hasProjectsGrid && filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category || 'Tous';
        filterProjects();
      });
    });
  }

  // ====== RECHERCHE LOCALE (projets.html) ======
  if (hasProjectsGrid && searchInput && searchInput.id === 'project-search') {
    searchInput.addEventListener('input', () => {
      filterProjects();
    });
  }

  // ====== Recherche via la barre globale du header ======
  if (globalSearchInput && globalSearchForm) {
    globalSearchInput.addEventListener('input', () => {
      // Si on est sur projets.html et qu’on a un champ spécifique, on le synchronise
      if (hasProjectsGrid && searchInput && searchInput.id === 'project-search') {
        searchInput.value = globalSearchInput.value;
        filterProjects();
      }
    });

    globalSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const term = globalSearchInput.value.trim();

      if (hasProjectsGrid && searchInput && searchInput.id === 'project-search') {
        // Sur projets.html : filtrage direct
        searchInput.value = term;
        filterProjects();
      } else {
        // Sur index.html : redirection vers projets.html avec le paramètre ?search=
        if (term) {
          window.location.href = 'projets.html?search=' + encodeURIComponent(term);
        } else {
          window.location.href = 'projets.html';
        }
      }
    });
  }

  // Empêche la soumission du formulaire interne (si présent) de recharger la page
  const form = document.getElementById('project-search-form');
  if (form) {
    form.addEventListener('submit', (e) => e.preventDefault());
  }

  // ====== Gestion du paramètre ?search= sur projets.html ======
  if (hasProjectsGrid && searchInput) {
    const paramsURL = new URLSearchParams(window.location.search);
    const initial = paramsURL.get('search');
    if (initial) {
      const decoded = decodeURIComponent(initial);
      searchInput.value = decoded;
      if (globalSearchInput) {
        globalSearchInput.value = decoded;
      }
    }
  }

  // ====== Construction initiale de la grille ======
  if (hasProjectsGrid) {
    if (searchInput && searchInput.value && searchInput.value.trim() !== '') {
      filterProjects();
    } else {
      renderProjects(projectsData);
    }
  }
});
