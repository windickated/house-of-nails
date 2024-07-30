import "../styles/reset.css";
import "../styles/general.css";
import "../styles/header.css";
import "../styles/salon-employees.css";
import "../styles/booksy.css";
import "../styles/gallery.css";
import "../styles/pricelist.css";
import "../styles/footer.css";

import { priceTabs, deactivateTabs, renderPriceList, resizePriceTabs } from "./priceList.js";
import renderGallery from "./gallery.js";

const menuIcon = document.querySelector('.menu');
const navigationBar = document.querySelector('nav');
let isHidden = true;
const booksyButton = document.querySelector('.booksy-anchor');
const toggleButton = document.querySelector('.toggle-button');
const theme = localStorage.getItem('theme');


window.addEventListener('load', resizePriceTabs);
window.addEventListener('resize', resizePriceTabs);

window.addEventListener('load', renderGallery);


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

navigationBar.addEventListener('mouseover', showMenu)
navigationBar.addEventListener('mouseout', hideMenu)
navigationBar.addEventListener('click', (event) => {
  if(event.target.tagName != 'IMG') {
    hideMenu();
  }
})

booksyButton.addEventListener('click', () => {
  window.open('https://booksy.com/pl-pl/228333_house-of-nails_paznokcie_20383_gdansk', '_self')
})

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
  navigationBar.style.visibility = 'visible';
  isHidden = false;
}
function hideMenu() {
  navigationBar.style.visibility = 'hidden';
  isHidden = true;
}


function handleThemeToggle() {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')) {
    toggleButton.src = 'public/light-mode.avif';
    localStorage.setItem('theme', 'light-mode');
  } else {
    toggleButton.src = 'public/dark-mode.avif';
    localStorage.removeItem('theme');
  }
}