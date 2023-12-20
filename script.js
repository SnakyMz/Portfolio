import projects from './projects.js';

const carousel = document.getElementById('carousel');
const carouselHead = document.createElement('h3');

carouselHead.innerHTML = `Number of projects are: ${projects.length}`;

carousel.appendChild(carouselHead);
