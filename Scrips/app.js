// Constantes del Navbar
const nav = document.querySelector('#hamburger button');
const icon = document.querySelector('#hamburger'),
    menu = document.querySelector('#menu');

// Menu Hamburguesa
nav.addEventListener('click', e =>{
    nav.classList.toggle('open');
});
// Menu lateral
icon.addEventListener('click', (e) => {
    menu.classList.toggle('b-content-active');
})