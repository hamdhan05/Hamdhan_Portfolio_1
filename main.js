const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

// Close menu on link click (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  }
});

// ScrollReveal settings
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: false,
};

// Header
ScrollReveal().reveal(".header__content h1", scrollRevealOption);
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 600,
});

// About
ScrollReveal().reveal(".about__content .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 600,
});

// Skills / Services
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 200,
});

// Portfolio
ScrollReveal().reveal(".portfolio__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".portfolio__container .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".portfolio__banner__card", {
  ...scrollRevealOption,
  delay: 600,
});

// Contact
ScrollReveal().reveal(".contact__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".contact__container .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".contact__socials a", {
  ...scrollRevealOption,
  interval: 200,
  delay: 500,
});
