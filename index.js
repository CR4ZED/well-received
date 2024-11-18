const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navOverlay = document.getElementById('nav-overlay');

function toggleMenu() {
    navMenu.classList.toggle('nav__menu--open');
    navOverlay.classList.toggle('nav__overlay--visible');
}

hamburger.addEventListener('click', (e) => {
    toggleMenu();
    e.stopPropagation();
});

navOverlay.addEventListener('click', toggleMenu);

window.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target)) {
        navMenu.classList.remove('nav__menu--open');
        navOverlay.classList.remove('nav__overlay--visible');
    }
});
