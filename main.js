import { initButtons } from './app/buttons';
import { findClosestCityAndDistance } from './app/cities';

const spinner = '<i class="fa-solid fa-spinner"></i>';

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};

initButtons();

const selectedIcon = document.querySelector('.selected-icon');
selectedIcon.addEventListener('click', function(e) {
    if(e.target.getAttribute('data-disabled') === 'true') return;
    const content = e.target.innerHtml;
    const lat = Number(localStorage.getItem('lat'));
    const lon = Number(localStorage.getItem('lon'));
    const side = Number(localStorage.getItem('side'));
    const result = findClosestCityAndDistance(lat, lon);
    alert(`Current geo location: ${lat} ${lon}, Direction: ${side}, City: ${result.name}, Distance: ${result.distance} km`);
    e.target.innerHtml = content;
    e.target.setAttribute('data-disabled', 'false');
})