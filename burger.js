const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuHover = document.querySelector(".menu_hover");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    // Skift menuens synlighed

    menu.classList.toggle("open");

    // Skift farven og teksten på menu_hover
    menuHover.classList.toggle("active");

    if (menu.classList.contains("open")) {
      menuHover.textContent = "[LUK]"; // Ændr teksten til [LUK]
    } else {
      menuHover.textContent = "[MENU]"; // Ændr teksten tilbage til [MENU]
    }
  });
});
