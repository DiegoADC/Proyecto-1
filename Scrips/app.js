const nav = document.querySelector('#hamburger button');
const icon = document.querySelector('#hamburger'),
    menu = document.querySelector('#menu');

nav.addEventListener('click', e =>{
    nav.classList.toggle('open');
});

icon.addEventListener('click', (e) => {
    menu.classList.toggle('b-content-active');
})