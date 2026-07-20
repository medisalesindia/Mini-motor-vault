// ==========================
// Mini Motor Vault
// script.js
// ==========================

// Sticky Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Mobile Menu
const menuBtn = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

    nav.classList.remove("active");

  });

});

// Hero Animation
window.addEventListener("load", () => {

  const hero = document.querySelector(".hero-content");

  if(hero){
      hero.classList.add("show");
  }

});

// Brand Hover Animation
document.querySelectorAll(".brand-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";
    });

});

// Button Hover
document.querySelectorAll(".btn-red,.btn-black").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

console.log("Mini Motor Vault Loaded Successfully 🚗");
