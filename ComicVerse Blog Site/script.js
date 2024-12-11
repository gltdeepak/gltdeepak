// Check if the menu button and navLinks exist before adding event listeners
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("img") : null;

// Add event listener for menu button if elements exist
if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.src = isOpen
      ? "https://cdn.glitch.global/111cfbf8-8cdd-484e-8107-0230f314a399/close-line.png"
      : "https://cdn.glitch.global/111cfbf8-8cdd-484e-8107-0230f314a399/menu-line.png";
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.src =
      "https://cdn.glitch.global/111cfbf8-8cdd-484e-8107-0230f314a399/menu-line.png";
  });
}

// Toggle search input when nav search is clicked
const navSearch = document.getElementById("nav-search");
if (navSearch) {
  navSearch.addEventListener("click", () => {
    navSearch.classList.toggle("open");
  });
}

// ScrollReveal options
const scrollRevealOption = {
  duration: 1000,
  distance: "50px",
  easing: "ease-in-out",
  reset: true,
};

// Apply ScrollReveal to various elements
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

// Initialize Swiper if the element exists
const swiper = document.querySelector(".swiper");
if (swiper) {
  new Swiper(".swiper", {
    loop: true,
  });
}

