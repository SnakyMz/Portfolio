import projects from './projects.js';

const carousel = document.getElementById('carousel');

projects.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'projectCard';

  const projectName = document.createElement('h2');
  projectName.className = 'projectName';
  projectName.innerHTML = project.name;

  projectCard.appendChild(projectName);

  carousel.appendChild(projectCard);
});
