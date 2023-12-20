import projects from './projects.js';

const carousel = document.getElementById('carousel');

projects.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'projectCard';

  const projectName = document.createElement('h2');
  projectName.className = 'projectName';
  projectName.innerHTML = project.name;

  const projectInfo = document.createElement('h4');
  projectInfo.className = 'projectInfo';
  projectInfo.innerHTML = `${project.company} | ${project.year} | ${project.stack}`;

  projectCard.appendChild(projectName);
  projectCard.appendChild(projectInfo);

  carousel.appendChild(projectCard);
});
