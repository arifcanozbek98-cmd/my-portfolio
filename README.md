## Notions du cours utilisées (dans mon projet)

### 1) HTML / Structure de page
- Navbar + sections avec ancres : `#about`, `#skills`, `#formation`, `#contact` (dans `index.html`)
- Mise en page responsive avec la grille Bootstrap (`container`, `row`, `col-*`)

### 2) CSS / Mise en forme
- Personnalisation des cartes et du thème (dans `style.css`)
- Dark mode via la classe `body.dark` (dans `style.css`)

### 3) JavaScript / DOM (sélection + modification)
- Sélection d’éléments :
  - `document.querySelector("#aboutBox .card-body")`
  - `document.getElementById("skillsRow")`
- Injection de contenu dans la page :
  - `element.innerHTML = ...` (fonctions `renderAbout`, `renderContact`, `renderFormation`, `renderSkills`)

### 4) Objets & tableaux (data)
- Données centralisées dans `const DATA = {...}` :
  - `DATA.about`, `DATA.contact`, `DATA.skills`, `DATA.formation`

### 5) Méthodes de tableaux (map / filter)
- Affichage d’une liste avec `map()` :
  - `DATA.skills.map(...)` pour générer les cartes
  - `DATA.formation.map(...)` pour générer les cartes de formation
- Filtrage avec `filter()` :
  - `DATA.skills.filter(...)` selon le texte tapé dans l’input

### 6) Événements (Event listeners)
- Filtre en direct :
  - `input.addEventListener("input", ...)` → met à jour la liste de compétences
- Bouton thème :
  - `btn.addEventListener("click", ...)` → active/désactive le mode sombre

### 7) localStorage (persistance)
- Sauvegarde du thème :
  - `localStorage.setItem("theme", ...)`
- Récupération au chargement :
  - `localStorage.getItem("theme")`

### 8) Chargement de la page (DOMContentLoaded)
- Initialisation au bon moment :
  - `document.addEventListener("DOMContentLoaded", ...)`
  - Appels : `renderAbout()`, `renderContact()`, `renderFormation()`, `renderSkills()`

    # Fichiers du projet

- `index.html` : structure de la page (sections, navbar, conteneurs Bootstrap) et liens vers CSS/JS.
- `style.css` : styles personnalisés (cartes, fond, dark mode).
- `script.js` : données (`DATA`) + logique JavaScript (DOM, affichage dynamique, filtre, thème, localStorage).
