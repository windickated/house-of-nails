import "../styles/reset.css";
import "../styles/global.css";
import "../styles/header.css";
import "../styles/salon-employees.css";
import "../styles/booksy.css";
import "../styles/gallery.css";
import "../styles/palette.css";
import "../styles/pricelist.css";
import "../styles/google.css";
import "../styles/footer.css";

import { priceTabs, deactivateTabs, renderPriceList, resizePriceTabs } from "./priceList.js";
import renderGallery from "./gallery.js";
import animation from "./animations.js";

const menuIcon = document.querySelector('.menu');
const navigationBar = document.querySelector('nav');
let isHidden = true;
const booksyButton = document.querySelector('.booksy-anchor');
const googleButton = document.querySelector('.google-anchor');
const toggleButton = document.querySelector('.toggle-button');
const theme = localStorage.getItem('theme');

const geoIcon = document.getElementById('geolocation');
const booksyIcon = document.querySelector('.booksy');
const telefonIcon = document.querySelector('.telefon-icon');
const instagramIcon = document.querySelector('.instagram');


window.addEventListener('load', resizePriceTabs);
window.addEventListener('resize', resizePriceTabs);

window.addEventListener('load', renderGallery);

window.addEventListener('load', changeIcons);

window.addEventListener('load', animation);

if(window.outerWidth <= 600) {
  window.addEventListener('click', () => {
    if(event.target.tagName != 'IMG') hideMenu()
  });
}


theme && document.body.classList.add(theme);
toggleButton.addEventListener('click', handleThemeToggle);


menuIcon.addEventListener('mouseenter', () => {
  if(window.outerWidth >= 600) { showMenu() }
})
menuIcon.addEventListener('mouseout', () => {
  if(window.outerWidth >= 600) { hideMenu() }
})
menuIcon.addEventListener('click', () => {
  isHidden ? showMenu() : hideMenu()
})

navigationBar.addEventListener('mouseover', showMenu);
navigationBar.addEventListener('mouseout', hideMenu);


booksyButton.addEventListener('click', () => {
  window.open('https://booksy.com/pl-pl/228333_house-of-nails_paznokcie_20383_gdansk', '_blank')
})

googleButton.addEventListener('mouseover', () => googleButtonHandle(true));
googleButton.addEventListener('mouseout', () => googleButtonHandle(false));


googleButton.addEventListener('touchstart', () => googleButtonHandle(true));
googleButton.addEventListener('touchend', () => googleButtonHandle(false));

googleButton.addEventListener('click', () => window.open('https://g.page/r/CfMB2T9FtuLoEBE/review', '_blank'));


priceTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tab.style.color = 'var(--clr-text-header)';
    tab.style.backgroundColor = 'var(--clr-bg-primary)';
    tab.style.fontWeight = '600';
    deactivateTabs(tab.id);
    renderPriceList(tab.id);
  })
})


function showMenu() {
  if (window.outerWidth <= 600) {
    navigationBar.style.top = '4em';
  } else {
    navigationBar.style.right = '0';
  }
  isHidden = false;
}
function hideMenu() {
  if (!isHidden) {
    if (window.outerWidth <= 600) {
      navigationBar.style.top = '-100%';
    } else {
      navigationBar.style.right = '-100%';
    }
    isHidden = true;
  }
}


function googleButtonHandle(hover) {
  if(hover === true) {
    googleButton.src = '/google-hover.png';
  } else {
    googleButton.src = '/google.png';
  }
}


function handleThemeToggle() {
  document.body.classList.toggle('light-mode');
  changeIcons();
  if(document.body.classList.contains('light-mode')) {
    toggleButton.src = '/light-mode.png';
    localStorage.setItem('theme', 'light-mode');
  } else {
    toggleButton.src = '/dark-mode.png';
    localStorage.removeItem('theme');
  }
}

function changeIcons() {
  if(document.body.classList.contains('light-mode')) {
    toggleButton.src = '/light-mode.png';

    geoIcon.src = '/geo-light.png';
    menuIcon.src = '/menu-light.png';

    booksyIcon.src = '/booksy-light.png';
    telefonIcon.src = '/telefon-light.png';
    instagramIcon.src = '/instagram-light.png';
  } else {
    toggleButton.src = '/dark-mode.png';

    geoIcon.src = '/geo.png';
    menuIcon.src = '/menu.png';

    booksyIcon.src = '/booksy.png';
    telefonIcon.src = '/telefon.png';
    instagramIcon.src = '/instagram.png';
  }
}