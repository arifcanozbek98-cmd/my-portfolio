const DATA = {
  about: {
    title: "Objectif",
    text: "Étudiant en L3 INGI. Je veux un stage et progresser en JavaScript, HTML, CSS et outils data."
  },
  contact: {
    email: "arifcanozbek@hotmail.com",
    phone: "+33 7 73 62 56 63",
    city: "Annecy, France",
    github: "https://github.com/arifcanozbek98-cmd"
  },

 formation: [
  {
    title: "Licence 3 Informatique Numérique et Gestion Industrielle (INGI) — IAE",
    period: "2025–2026",
    place: "Université Savoie Mont Blanc (France)",
    details: []
  },
  {
    title: "Cours de français (DUEF) B1/B2 — ACCENTS",
    period: "2024–2025",
    place: "Université Savoie Mont Blanc (France)",
    details: []
  },
  {
    title: "Erasmus+ — Programme Economics (1-year exchange program)",
    period: "2022–2023",
    place: "Clermont Auvergne University (France)",
    details: []
  },
  {
    title: "Licence en Économie (Bac+4) — Université d’Ege",
    period: "2017–2023",
    place: "Turquie",
    details: ["GPA : 2.95 / 4"]
  }
],

  skills: [
    // Web
    { name: "HTML5", group: "Web" },
    { name: "CSS3", group: "Web" },
    { name: "Responsive Design", group: "Web" },
    { name: "Bootstrap 5", group: "Web" },
    { name: "JavaScript (ES6+)", group: "Web" },
    { name: "DOM Manipulation", group: "Web" },
    { name: "Fetch API (bases)", group: "Web" },
    { name: "JSON", group: "Web" },
    { name: "Accessibilité (bases)", group: "Web" },

    // Outils & Dev
    { name: "Git / GitHub (bases)", group: "Outils" },
    { name: "VS Code", group: "Outils" },
    { name: "Terminal / CLI (bases)", group: "Outils" },
    { name: "NPM (bases)", group: "Outils" },

    // Data
    { name: "SQL (SELECT, JOIN - bases)", group: "Data" },
    { name: "Modélisation de données (bases)", group: "Data" },
    { name: "Power BI (notions)", group: "Data" },
    { name: "Excel (tableaux, formules)", group: "Data" },

    // Gestion / Business
    { name: "Gestion de projet (bases)", group: "Gestion" },
    { name: "SAP (ERP) - notions", group: "Gestion" },
    { name: "Analyse & reporting (bases)", group: "Gestion" },

    // Langues
    { name: "Français (B2)", group: "Langues" },
    { name: "Turc (natif)", group: "Langues" },
    { name: "Anglais (intermédiaire)", group: "Langues" },

    // Soft skills
    { name: "Travail en équipe", group: "Soft skills" },
    { name: "Communication", group: "Soft skills" },
    { name: "Organisation", group: "Soft skills" },
    { name: "Autonomie", group: "Soft skills" },
    { name: "Curiosité", group: "Soft skills" }
  ]
};

function renderAbout() {
  const box = document.querySelector("#aboutBox .card-body");
  if (!box) return;

  box.innerHTML = `
    <h3 class="h6 fw-bold">${DATA.about.title}</h3>
    <p class="mb-0 text-secondary">${DATA.about.text}</p>
  `;
}

function renderContact() {
  const box = document.querySelector("#contactBox .card-body");
  if (!box) return;

  const c = DATA.contact;
  box.innerHTML = `
    <p class="mb-1"><strong>Email:</strong> <a href="mailto:${c.email}">${c.email}</a></p>
    <p class="mb-1"><strong>Tél:</strong> <a href="tel:${c.phone}">${c.phone}</a></p>
    <p class="mb-1"><strong>Ville:</strong> ${c.city}</p>
    <p class="mb-0"><strong>GitHub:</strong> <a href="${c.github}" target="_blank" rel="noreferrer">Lien</a></p>
  `;
}

function renderFormation() {
  const box = document.getElementById("formationBox");
  if (!box) return;

  box.innerHTML = DATA.formation.map(f => `
    <div class="col-12 col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
            <h3 class="h6 fw-bold m-0">${f.title}</h3>
            <span class="badge text-bg-light border">${f.period}</span>
          </div>
          <div class="text-secondary small mb-3">${f.place}</div>
          <ul class="mb-0">
            ${(f.details || []).map(d => `<li>${d}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `).join("");
}

function getBadgeClass(group) {
  const colors = {
    "Web": "text-bg-primary",
    "Outils": "text-bg-dark",
    "Data": "text-bg-success",
    "Gestion": "text-bg-warning",
    "Langues": "text-bg-info",
    "Soft skills": "text-bg-secondary"
  };
  return colors[group] || "text-bg-secondary";
}

function renderSkills(searchText = "") {
  const row = document.getElementById("skillsRow");
  if (!row) return;

  const q = searchText.trim().toLowerCase();

  const list = DATA.skills.filter(s => {
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q) ||
      s.group.toLowerCase().includes(q)
    );
  });

  row.innerHTML = list.map(s => {
    const badge = getBadgeClass(s.group);
    return `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 skill-card">
          <div class="card-body">
            <span class="badge ${badge} mb-2">${s.group}</span>
            <div class="fw-bold">${s.name}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function setupTheme() {
  const btn = document.getElementById("btnTheme");
  if (!btn) return;

  const saved = localStorage.getItem("theme") || "light";
  if (saved === "dark") document.body.classList.add("dark");

  btn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
    btn.textContent = mode === "dark" ? "Light" : "Dark";
  });
}

function setupSkillFilter() {
  const input = document.getElementById("skillSearch");
  if (!input) return;

  input.addEventListener("input", () => {
    renderSkills(input.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderAbout();
  renderContact();
  renderFormation();
  renderSkills();
  setupTheme();
  setupSkillFilter();
});