const btn = document.querySelector(".mobile-menu-button");
const home = document.querySelector(".home");
const news = document.querySelector(".news");
const about = document.querySelector(".about");
const users = document.querySelector(".users");

const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

home.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
news.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
about.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
users.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
