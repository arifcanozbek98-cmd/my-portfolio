README — Portfolio (Bootstrap + JavaScript)

1) Objectif du projet

Ce projet est un mini-portfolio (type CV en ligne) réalisé en HTML + CSS + JavaScript, avec Bootstrap 5 pour la mise en page et les composants.
L’objectif est d’avoir un site simple, clair, responsive, et majoritairement codé en JavaScript (contenu injecté via JS).

⸻

2) Technologies utilisées
	•	HTML5 : structure de la page (sections, navbar, conteneurs)
	•	Bootstrap 5 (CDN) : grille responsive, boutons, cartes, navbar
	•	CSS (style.css) : petites retouches (arrondis, dark mode, hover)
	•	JavaScript (script.js) : injection du contenu (profil, compétences, formation, contact) + filtre des compétences + bouton dark/light

⸻

3) Structure des fichiers

Le projet est volontairement simple (3 fichiers principaux) :
	•	index.html : la structure (navbar + sections + conteneurs vides)
	•	style.css : styles personnalisés (petit fichier)
	•	script.js : logique JS (données + affichage + interactions)

⸻

4) Fonctionnement général (logique)

Le site fonctionne en 2 étapes :

A) Les données du site

Dans script.js, on a un objet DATA qui contient le contenu :
	•	DATA.about : texte du profil / objectif
	•	DATA.contact : email, téléphone, ville, GitHub
	•	DATA.formation : liste des formations
	•	DATA.skills : liste de compétences + catégorie (group)

👉 Avantage : si je veux modifier mon CV, je modifie uniquement DATA, pas le HTML.

B) Affichage automatique

Quand la page est chargée, JavaScript :
	•	récupère les zones HTML (ex: #aboutBox, #skillsRow, etc.)
	•	construit du HTML (cartes Bootstrap)
	•	l’injecte dans la page

⸻

5) Pages / sections (index.html)

La page contient 4 sections principales :
	•	Profil (#about)
	•	Compétences (#skills)
	•	Formation (#formation)
	•	Contact (#contact)

Chaque section contient un “conteneur” que JavaScript remplit :
	•	#aboutBox
	•	#skillsRow
	•	#formationBox
	•	#contactBox

⸻

6) JavaScript (script.js) — explication des fonctions

6.1 renderAbout()
	•	Prend DATA.about
	•	Remplit #aboutBox avec un titre + paragraphe

6.2 renderContact()
	•	Prend DATA.contact
	•	Remplit #contactBox avec email / téléphone / ville / GitHub
	•	Utilise mailto: et tel: pour rendre les liens cliquables

6.3 renderFormation()
	•	Prend DATA.formation (liste)
	•	Génère des cartes Bootstrap et les met dans #formationBox

6.4 renderSkills(searchText = "")
	•	Affiche les compétences sous forme de cartes dans #skillsRow
	•	Si searchText n’est pas vide : filtre les compétences par nom ou catégorie

6.5 setupSkillFilter()
	•	Écoute l’input #skillSearch
	•	À chaque frappe, appelle renderSkills(input.value) pour filtrer en direct

6.6 setupTheme()
	•	Bouton #btnTheme : ajoute/enlève la classe dark sur <body>
	•	Le CSS gère l’apparence du mode sombre

6.7 Initialisation

Au chargement (DOMContentLoaded) :
	•	met l’année dans #year
	•	appelle renderAbout(), renderContact(), renderFormation(), renderSkills()
	•	active les comportements : setupTheme() et setupSkillFilter()

⸻

7) CSS (style.css) — ce qui est personnalisé

Le CSS est volontairement court et sert uniquement à :
	•	arrondir les cartes (.card)
	•	gérer le mode sombre (quand body.dark est actif)
	•	améliorer légèrement les compétences avec un hover (.skill-card:hover)
	•	améliorer la lisibilité des inputs en dark mode

⸻

8) Comment utiliser Bootstrap ici ?

Bootstrap est inclus sans installation grâce au CDN dans index.html :
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
uis on utilise des classes Bootstrap directement dans le HTML :
	•	container, row, col-lg-7, col-lg-5 → grille responsive
	•	navbar, navbar-expand-lg, bg-dark, sticky-top → barre de navigation
	•	card, card-body → cartes
	•	btn, btn-primary, btn-outline-secondary → boutons

⸻

9) Lancer le projet

Comme c’est un site statique :
	•	Ouvrir index.html dans un navigateur
ou
	•	Utiliser “Live Server” dans VS Code

⸻

10) Points forts du projet
	•	Code simple et clair (idéal pour expliquer à l’oral)
	•	Utilisation de Bootstrap pour le design responsive
	•	Utilisation de JavaScript pour générer le contenu automatiquement
	•	Filtre de compétences en direct
	•	Dark/Light mode

⸻

11) Améliorations possibles (optionnel)
	•	Ajouter une section “Projets”
	•	Ajouter un formulaire de contact
	•	Ajouter des animations légères (mais pas obligatoire)

⸻

