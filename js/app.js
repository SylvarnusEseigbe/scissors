const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function(){
    const navLinks = document.querySelector(".nav_links");

    const navButtons = document.querySelector(".nav_buttons");

    const nav = document.querySelector("nav");

    navLinks.classList.toggle("active");

    navButtons.classList.toggle("active");
}