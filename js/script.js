const sideBar = document.querySelector(".sidebar");
const nav = document.querySelector("nav")
const section = document.querySelector("section");
const menuBtn = document.querySelector(".fa-bars");

menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active")
    nav.classList.toggle("active")
    section.classList.toggle("active");
})
