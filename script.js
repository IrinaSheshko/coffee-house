/* global gsap */

const cafes = document.querySelectorAll(".cafe");

// Анимация при наведении
cafes.forEach(cafe => {
    cafe.addEventListener("mouseover", () => {
        gsap.to(cafe, { scale: 1.1, duration: 0.5 });
    });
    cafe.addEventListener("mouseout", () => {
        gsap.to(cafe, { scale: 1, duration: 0.5 });
    });
});

// Toggle мобильного меню с анимацией
window.toggleMenu = function() {
    const nav = document.getElementById("myTopnav");
    if (!nav) return;

    nav.classList.toggle("responsive");

    if (nav.classList.contains("responsive")) {
        gsap.fromTo(nav.querySelectorAll("a:not(.icon)"),
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });
    }
}

