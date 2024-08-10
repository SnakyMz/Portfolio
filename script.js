import projects from './projects.js';

const carousel = document.getElementById('carousel');

let scrollInterval;

function leftScroll() {
  scrollInterval = setInterval(() => {
    carousel.scrollLeft += -50;
  }, 50);
}

function rightScroll() {
  scrollInterval = setInterval(() => {
    carousel.scrollLeft += 50;
  }, 50);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

const leftBtn = document.createElement('span');
leftBtn.className = 'left';
leftBtn.innerHTML = '<i class="bi bi-caret-left-fill"></i>';
leftBtn.onmousedown = leftScroll;
leftBtn.onmouseup = stopScroll;
leftBtn.onmouseleave = stopScroll;

const rightBtn = document.createElement('span');
rightBtn.className = 'right';
rightBtn.innerHTML = '<i class="bi bi-caret-right-fill"></i>';
rightBtn.onmousedown = rightScroll;
rightBtn.onmouseup = stopScroll;
rightBtn.onmouseleave = stopScroll;

carousel.appendChild(leftBtn);
carousel.appendChild(rightBtn);

projects.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'projectCard';

  const projectName = document.createElement('h3');
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
  projectLive.target = '_blank';
  projectLive.rel = 'noopener';
  projectLive.innerHTML = 'Live&nbsp<i class="bi bi-window-fullscreen"></i>';
  projectLive.href = project.liveVersionLink;
  projectLinks.appendChild(projectLive);

  if(project.SourceLink !== null) {
    const projectSource = document.createElement('a');
    projectSource.className = 'links projectLinks';
    projectSource.target = '_blank';
    projectSource.rel = 'noopener';
    projectSource.innerHTML = 'Source&nbsp<i class="bi bi-github"></i>';
    projectSource.href = project.SourceLink;
    projectLinks.appendChild(projectSource);
  }

  projectCard.appendChild(projectName);
  projectCard.appendChild(projectInfo);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectTechList);
  projectCard.appendChild(projectDesc);
  projectCard.appendChild(projectLinks);

  carousel.appendChild(projectCard);
});
