// script.js
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.hidden.md\\:flex');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});
