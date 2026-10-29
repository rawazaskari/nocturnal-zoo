const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".site-nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
});