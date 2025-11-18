📄 README.md — Projet SolidFund
 SolidFund
Plateforme solidaire de financement participatif – Projet de fin de formation (HTML, CSS, JavaScript)

SolidFund est une mini-plateforme web de financement participatif, conçue pour mettre en avant des projets communautaires et permettre à chacun de contribuer à des causes sociales.
Ce projet est réalisé exclusivement avec HTML, CSS et JavaScript, dans le cadre d’une formation front-end.

L’objectif principal est de présenter un site moderne, responsive et fonctionnel, inspiré de plateformes comme GoFundMe, tout en étant adapté au contexte africain (FCFA, projets communautaires, initiatives locales).

 1. Présentation du projet

SolidFund est une démonstration technique d’un site vitrine permettant :

d’explorer des projets solidaires (santé, éducation, agriculture, environnement…)

de visualiser des barres de progression animées,

de consulter la page détaillée d’un projet,

de simuler une contribution financière (via JavaScript),

de comprendre l’impact social de chaque initiative.

Ce projet sert également de base pour une future plateforme réelle plus avancée : Pottal Fouta.

 2. Objectifs du projet

Montrer ma maîtrise du front-end (HTML, CSS, JavaScript vanille)

Créer une interface professionnelle, moderne et responsive

Manipuler le DOM, les événements et les données JS

Utiliser un fichier data externe (projects.js) pour dynamiser le site

Naviguer entre les pages grâce à un paramètre d’URL (?id=)

Structurer un projet web complet comme un vrai développeur

⚙️ 3. Fonctionnalités principales
🔹 Page d’accueil (index.html)

Barre de navigation moderne inspirée de GoFundMe

Section Hero avec image, slogan et boutons d’action

Présentation de projets populaires

Animation des barres de progression

CTA “Lancer mon projet” et “Soutenir un projet”

🔹 Page liste des projets (projets.html)

Grille responsive de tous les projets

Filtrage dynamique par catégories (Santé, Éducation, Agriculture…)

Barre de recherche en JavaScript

Cartes animées et design moderne

Chaque carte redirige vers projet.html?id=X

🔹 Page détail d’un projet (projet.html)

Récupération dynamique de l’ID du projet depuis l’URL

Chargement automatique des données via projects.js

Grande image, description complète, localisation, contributeurs

Barre de progression animée

Bouton “Contribuer maintenant” (simulation)

Section “À propos du projet”

Section “Impact attendu”

Projets similaires recommandés

🔹 JavaScript (vanilla)

Manipulation du DOM

Simulation d’un don (+10 000 FCFA)

Animation dynamique des barres

Filtrage intelligent

Navigation dynamique via ID

Affichage automatique des données



4. Identité visuelle

Couleurs principales :

Bleu → #0077B6

Vert → #00A896

Or → #FFD700

Blanc → #F9F9F9

Style :

Fintech moderne

Bords arrondis

Ombres légères

Espacement généreux

Icônes simples

Police :

Poppins (Google Fonts)

5. Données : projects.js

Les projets sont stockés dans un fichier séparé sous forme de tableau JavaScript :

const projects = [
  {
    id: 1,
    titre: "...",
    categorie: "...",
    image: "...",
    collecte: 0,
    objectif: 0,
    impactAttendu: [ ... ],
    ...
  }
];


Cela permet :

la réutilisation des données dans plusieurs pages

la navigation dynamique via ?id=

la modification facile des projets

6. Navigation dynamique via URL

Quand l'utilisateur clique sur une carte :

projet.html?id=3


Dans script.js, récupération de l’ID :

const id = new URLSearchParams(window.location.search).get("id");
const project = projects.find(p => p.id == id);

 7. Technologies utilisées
Technologie	Rôle
HTML5	Structure des pages
CSS3	Style, animations, responsive
JavaScript Vanilla	Logique, interactions, filtres, DOM
JSON-like (projects.js)	Stockage des données
Git / GitHub	Versionnement & déploiement
Figma (optionnel)	Design & prototype
8. Pourquoi ce projet est important

SolidFund montre :

ma capacité à créer un site complet en front-end

ma maîtrise des technologies fondamentales du web

ma compréhension des UX/UI modernes

ma capacité à structurer un projet professionnel

ma vision pour développer plus tard une version réelle, complète et sécurisée

Ce projet est également une démo technique du futur grand projet : Pottal Fouta, une plateforme réelle de mobilisation communautaire.

 9. Auteur

Amadou Moumini Barry
Développeur web junior – Passionné d’innovation communautaire, solidarité et numérique.