const sideBar = document.querySelector(".sidebar");
const nav = document.querySelector("nav")
const container = document.querySelector(".container");
const menuBtn = document.querySelector(".fa-bars");

menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active")
    nav.classList.toggle("active")
    container.classList.toggle("active");
})