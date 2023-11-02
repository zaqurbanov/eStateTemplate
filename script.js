'use strict';
const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelector("[data-nav-toggler]");

navToggle.addEventListener("click", () => navbar.classList.toggle("active"));
window.addEventListener("scroll" ,  e => {

    header.classList[window.scrollY > 40 ? "add" : "remove"]('active');
})


// card script


const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
toggleBtns.forEach(toggleBtn =>{
    toggleBtn.addEventListener("click", ()=>{
        toggleBtn.classList.toggle("active");
    })

}) 