import './style.css';
import './images/sprite.svg';
import "./js/theme-switch";
import menuItems from "./js/menu.js";
import menuTemplate from './templates/menu.hbs';

const menuList = document.querySelector(".js-menu");
menuList.innerHTML = menuItems.map(el => menuTemplate(el)).join("");



