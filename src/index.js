import './common.scss';
import userImage from './assets/user.png';
import categoryImage from './assets/category.png';
import menuImage from './assets/menu.png';

function init() {
    const root = document.getElementById('root');
    const template = `
        <nav class="navbar">
            <div class="navbar__logo">
                <strong>준혁장터</strong>
            </div>
            <ul class="navbar__menu">
                <li>아라동 </li>
                <li>노형동</li>
                <li>천수동</li>
                <li>광진구</li>
            </ul>
            <ul class="navbar__icons">
                <li><img src=${userImage}></li>
                <li><img src=${categoryImage}></li>
            </ul>
            <div class="navbar__toggleButton">
                <img src=${menuImage}>
            </div>
        </nav>
    `;

    root.innerHTML = template;

    const toggleBtn = root.querySelector('.navbar__toggleButton');
    const menus = root.querySelector('.navbar__menu');
    const icons = root.querySelector('.navbar__icons');

    toggleBtn.addEventListener('click', () => {
        menus.classList.toggle('active');
        icons.classList.toggle('active');
    });
}

init();
