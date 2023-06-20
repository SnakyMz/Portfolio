// Menu Popup
const menu = document.querySelector('#menu');
const pop = document.querySelector('.pop-menu');

function poping() {
  if (pop.style.display === 'block') {
    menu.src = './images/Enabled.svg';
    pop.style.display = 'none';
    menu.style.margin = '3%';
  } else {
    menu.src = './images/X-Icon.svg';
    pop.style.display = 'block';
    menu.style.margin = '6%';
  }
}

menu.addEventListener('click', poping);

const menus = document.querySelectorAll('.pop-menu a');
for (let i = 0; i < menus.length; i += 1) {
  menus[i].addEventListener('click', () => {
    poping();
  });
}

// Projects Generation and Popup
const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileImage: './images/Snapshoot Portfolio.svg',
    desktopImage: './images/Snapshoot Portfolio 1.svg',
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveVersionLink: '',
    SourceLink: '',
    company: 'CANOPY',
    year: '2015',
    stack: 'Back End Dev',
  },
  {
    name: 'Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    mobileImage: './images/Snapshoot Portfolio (1).svg',
    desktopImage: './images/Snapshoot Portfolio 2.svg',
    languages: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'JavaScript',
    ],
    liveVersionLink: '',
    SourceLink: '',
    company: 'FACEBOOK',
    year: '2015',
    stack: 'Full Stack Dev',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    mobileImage: './images/Snapshoot Portfolio (2).svg',
    desktopImage: './images/Snapshoot Portfolio 3.svg',
    languages: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'JavaScript',
    ],
    liveVersionLink: '',
    SourceLink: '',
    company: 'FACEBOOK',
    year: '2015',
    stack: 'Full Stack Dev',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    mobileImage: './images/Snapshoot Portfolio (3).svg',
    desktopImage: './images/Snapshoot Portfolio 4.svg',
    languages: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'JavaScript',
    ],
    liveVersionLink: '',
    SourceLink: '',
    company: 'Uber',
    year: '2018',
    stack: 'Lead Developer',
  },
];

const workspace = document.querySelector('#workspace');
const generateProjects = () => {
  projects.map((work, index) => {
    const works = document.createElement('div');
    works.className = 'works';
    if (index % 2 === 0) {
      works.className = 'works';
    } else {
      works.className = 'works alt';
    }
    works.innerHTML = `
      <img src="${work.mobileImage}" class="workimage" alt="${work.name}">
      <img src="${work.desktopImage}" class="deskimg" alt="${work.name}">
      `;

    const worktext = document.createElement('div');
    worktext.className = 'worktext';
    worktext.innerHTML = `
      <h2>${work.name}</h2>
      <div class="desc">
          <p class="descA">${work.company}</p>
          <img src="./images/Counter.svg" alt="counter">
          <p class="grey">${work.stack}</p>
          <img src="./images/Counter.svg" alt="counter">
          <p class="grey">${work.year}</p>
      </div>
      <p class="workdesc">${work.description}</p>
      `;

    const langs = document.createElement('ul');
    langs.className = 'langs';
    work.languages.map((lang) => {
      const li = document.createElement('li');
      li.innerHTML = lang;
      langs.appendChild(li);
      return null;
    });
    worktext.appendChild(langs);

    const seeProject = document.createElement('button');
    seeProject.innerHTML = 'See project';
    seeProject.className = 'see-project btn';
    seeProject.type = 'button';
    worktext.appendChild(seeProject);

    works.appendChild(worktext);
    workspace.appendChild(works);
    return null;
  });
};

window.onload = () => {
  generateProjects();
};
