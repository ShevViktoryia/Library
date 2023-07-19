import './index.html';
import './assets/sass/pages/_index.sass';

const burger_menu = document.querySelector('.burger_menu');
const nav = document.querySelector('.header_nav');
burger_menu.onclick = () => nav.classList.toggle('open_menu');