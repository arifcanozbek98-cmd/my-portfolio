// =========================
// Element selection
// =========================
const body = document.body;
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.getElementById("themeToggle");
const backToTopButton = document.getElementById("backToTop");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

// =========================
// Mobile navigation toggle
// =========================
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Close mobile menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// =========================
// Theme toggle with localStorage
// =========================
const savedTheme = localStorage.getItem("preferred-theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  const currentTheme = body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("preferred-theme", currentTheme);
});

// =========================
// Reveal on scroll animation
// =========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

// =========================
// Active navbar link on scroll
// =========================
function updateActiveNavLink() {
  let currentSectionId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute("href");
    link.classList.toggle("active", target === `#${currentSectionId}`);
  });
}

// =========================
// Back-to-top visibility
// =========================
function updateBackToTopButton() {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =========================
// Project filtering
// =========================
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    // Update active button style
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Show only matching projects
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selectedFilter === "all" || category === selectedFilter;

      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// =========================
// Scroll-related updates
// =========================
window.addEventListener("scroll", () => {
  updateActiveNavLink();
  updateBackToTopButton();
});

// Run once on page load
updateActiveNavLink();
updateBackToTopButton();
