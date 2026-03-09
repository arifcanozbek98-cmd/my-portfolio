/* =========================================================
   SİTE VERİLERİ (İçerik / metinler)
   Not: Buradaki DATA, sitedeki yazıların "deposu" gibi.
   JS bu verileri alıp HTML içine otomatik yerleştiriyor.
   ========================================================= */

const DATA = {
  /* Profil bölümü (About) */
  about: {
    title: "Objectif",
    text: "Étudiant en L3 INGI. Je veux un stage et progresser en JavaScript, HTML, CSS et outils data."
  },

  /* İletişim bilgileri */
  contact: {
    email: "arifcanozbek@hotmail.com",
    phone: "+33 7 73 62 56 63",
    city: "Annecy, France",
    github: "https://github.com/arifcanozbek98-cmd"
  },

  /* Eğitim / formation listesi
     NOT: details (ek madde) kaldırıldı => daha basit
  */
  formation: [
    {
      title: "Licence 3 INGI — IAE",
      period: "2025–2026",
      place: "Université Savoie Mont Blanc (France)"
    },
    {
      title: "Cours de français (DUEF) B1/B2 — ACCENTS",
      period: "2024–2025",
      place: "Université Savoie Mont Blanc (France)"
    },
    {
      title: "Erasmus+ — Economics (1-year exchange)",
      period: "2022–2023",
      place: "Clermont Auvergne University (France)"
    },
    {
      title: "Licence en Économie (Bac+4) — Université d’Ege",
      period: "2017–2023",
      place: "Turquie"
    }
  ],

  /* Yetenekler (skills)
     group: kategori, name: görünen isim
  */
  skills: [
    { name: "HTML5", group: "Web" },
    { name: "CSS3", group: "Web" },
    { name: "Bootstrap 5", group: "Web" },
    { name: "JavaScript (ES6+)", group: "Web" },

    { name: "Git / GitHub (bases)", group: "Outils" },
    { name: "VS Code", group: "Outils" },
    { name: "Terminal / CLI (bases)", group: "Outils" },

    { name: "SQL (bases)", group: "Data" },
    { name: "Power BI (notions)", group: "Data" },
    { name: "Excel (bases)", group: "Data" }
  ]
};

/* =========================================================
   PROFİL (About) bölümünü ekrana basma
   Amaç: DATA.about içindeki title + text'i #aboutBox içine koymak
   ========================================================= */
function renderAbout() {
  const box = document.querySelector("#aboutBox .card-body");
  if (!box) return;

  box.innerHTML = `
    <h3 class="h6 fw-bold">${DATA.about.title}</h3>
    <p class="mb-0 text-secondary">${DATA.about.text}</p>
  `;
}

/* =========================================================
   CONTACT bölümünü ekrana basma
   Amaç: DATA.contact içindeki bilgileri #contactBox içine koymak
   ========================================================= */
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

/* =========================================================
   FORMATION (Eğitim) bölümünü ekrana basma
   Amaç: DATA.formation dizisini kartlara çevirip #formationBox içine koymak
   NOT: details + koşullu template kaldırıldı => daha kolay
   ========================================================= */
function renderFormation() {
  const box = document.getElementById("formationBox");
  if (!box) return;

  box.innerHTML = DATA.formation
    .map((f) => `
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
              <h3 class="h6 fw-bold m-0">${f.title}</h3>
              <span class="badge text-bg-light border">${f.period}</span>
            </div>
            <div class="text-secondary small">${f.place}</div>
          </div>
        </div>
      </div>
    `)
    .join("");
}

/* =========================================================
   SKILLS bölümünü ekrana basma + filtreleme
   Not: getBadgeClass kaldırıldı -> tüm badge'ler tek renk (secondary)
   ========================================================= */
function renderSkills(searchText = "") {
  const row = document.getElementById("skillsRow");
  if (!row) return;

  const q = searchText.trim().toLowerCase();

  const list = DATA.skills.filter((s) => {
    if (!q) return true;
    return s.name.toLowerCase().includes(q) || s.group.toLowerCase().includes(q);
  });

  row.innerHTML = list
    .map((s) => `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 skill-card">
          <div class="card-body">
            <span class="badge text-bg-secondary mb-2">${s.group}</span>
            <div class="fw-bold">${s.name}</div>
          </div>
        </div>
      </div>
    `)
    .join("");
}

/* =========================================================
   LIGHT / DARK tema
   Not: localStorage kaldırıldı => sadece anlık toggle (daha kolay)
   ========================================================= */
function setupTheme() {
  const btn = document.getElementById("btnTheme");
  if (!btn) return;

  // Sayfa ilk açılınca buton yazısını ayarla
  btn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
  });
}

/* =========================================================
   Skill filtre input'u (anlık filtre)
   input'a her yazıldığında renderSkills tekrar çağrılır
   ========================================================= */
function setupSkillFilter() {
  const input = document.getElementById("skillSearch");
  if (!input) return;

  input.addEventListener("input", () => {
    renderSkills(input.value);
  });
}

/* =========================================================
   SAYFA AÇILINCA ÇALIŞAN KISIM (başlangıç)
   DOMContentLoaded: HTML tamamen yüklenince çalışır
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // İlk ekran çizimleri
  renderAbout();
  renderContact();
  renderFormation();
  renderSkills();

  // Davranış/etkileşim ayarları
  setupTheme();
  setupSkillFilter();
});
