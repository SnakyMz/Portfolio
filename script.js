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

  const projectImg = document.createElement('img');
  projectImg.className = 'projectImg';
  projectImg.src = project.image;
  projectImg.alt = project.name;

  const projectTechList = document.createElement('ul');
  projectTechList.className = 'projectTechList';

  project.technologies.forEach((tech) => {
    const projectTech = document.createElement('li');
    projectTech.className = 'projectTech';
    projectTech.innerHTML = tech;
    projectTechList.appendChild(projectTech);
  });

  projectCard.appendChild(projectName);
  projectCard.appendChild(projectInfo);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectTechList);

  carousel.appendChild(projectCard);
});
