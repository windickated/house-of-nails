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


window.addEventListener('load', resizePriceTabs);
window.addEventListener('resize', resizePriceTabs);

window.addEventListener('load', renderGallery);


menuIcon.addEventListener('mouseenter', () => {
  if(window.outerWidth >= 600) { showMenu() }
})
menuIcon.addEventListener('mouseout', hideMenu)
menuIcon.addEventListener('click', () => {
  isHidden ? showMenu() : hideMenu()
})

navigationBar.addEventListener('mouseover', showMenu)
navigationBar.addEventListener('mouseout', hideMenu)
navigationBar.addEventListener('click', hideMenu)

booksyButton.addEventListener('click', () => {
  window.open('https://booksy.com/pl-pl/228333_house-of-nails_paznokcie_20383_gdansk', '_self')
})

priceTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tab.style.color = 'black';
    tab.style.backgroundColor = 'rgba(255, 255, 255, 1)';
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