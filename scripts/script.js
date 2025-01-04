particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#fff" },
      polygon: { nb_sides: 5 }
    },
    opacity: { value: 0.6, random: false },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

function openModal(name, role, details, image) {
  const modal = document.getElementById("team-modal");
  document.getElementById("team-modal-name").innerText = name;
  document.getElementById("team-modal-role").innerText = role;
  document.getElementById("team-modal-details").innerHTML = details;
  document.getElementById("team-modal-image").src = image;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("team-modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("team-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const fadeSections = document.querySelectorAll(".fade-section");
window.addEventListener("scroll", () => {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: true,
    offset: 120,
    duration: 800
  });
});

document.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero-banner");
  const nav = document.querySelector(".site-navigation");
  if (!hero || !nav) return;
  const heroBottom = hero.getBoundingClientRect().bottom;
  if (heroBottom <= 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

const dropdownItems = document.querySelectorAll(".dropdown");
dropdownItems.forEach(item => {
  item.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      const submenu = item.querySelector(".dropdown-menu");
      if (submenu) {
        submenu.classList.toggle("show-submenu");
        e.stopPropagation();
      }
    }
  });
});
