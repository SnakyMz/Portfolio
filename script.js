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

  const projectDesc = document.createElement('p');
  projectDesc.className = 'projectDesc';
  projectDesc.innerHTML = project.description;

  const projectLinks = document.createElement('div');
  projectLinks.className = 'projectLinkList';

  const projectLive = document.createElement('a');
  projectLive.className = 'links projectLinks';
  projectLive.innerHTML = 'Live&nbsp<i class="bi bi-window-fullscreen"></i>';
  projectLive.href = project.liveVersionLink;

  const projectSource = document.createElement('a');
  projectSource.className = 'links projectLinks';
  projectSource.innerHTML = 'Source&nbsp<i class="bi bi-github"></i>';
  projectSource.href = project.SourceLink;

  projectLinks.appendChild(projectLive);
  projectLinks.appendChild(projectSource);

  projectCard.appendChild(projectName);
  projectCard.appendChild(projectInfo);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectTechList);
  projectCard.appendChild(projectDesc);
  projectCard.appendChild(projectLinks);

  carousel.appendChild(projectCard);
});
