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
    name: 'Gamecon',
    description: 'An informative website about a Gaming fair called Gamecon. This website is inspired by Cindy Shin`s CC Global Summit 2015. Built with JavaScript.',
    image: './images/gamecon.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveVersionLink: 'https://snakymz.github.io/Gamecon/',
    SourceLink: 'https://github.com/SnakyMz/Gamecon',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'To Do List',
    description: 'A website to keep track of your daily tasks by allowing users to add, remove or update their tasks. Built with JavaScript.',
    image: './images/todolist.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveVersionLink: 'https://snakymz.github.io/To-Do-List/',
    SourceLink: 'https://github.com/SnakyMz/To-Do-List',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'PokeDex',
    description: 'A website that displays a list of Pokemons by fetching data from the API. The website allows users to like and comment on displayed Pokemon which also uses API to maintain data. Built with JavaScript.',
    image: './images/pokedex.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'API',
    ],
    liveVersionLink: 'https://snakymz.github.io/PokeDex/',
    SourceLink: 'https://github.com/SnakyMz/PokeDex',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'Math Magicians',
    description: 'A website that contains a calculator to perform mathematical operations and a quote section that generates a random quote on load. Built with React.',
    image: './images/mathmagician.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'API',
    ],
    liveVersionLink: 'https://math-magicians-7hio.onrender.com/',
    SourceLink: 'https://github.com/SnakyMz/Math-Magicians',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'Bookstore',
    description: 'A website that contains a library of books. You can add or delete a book. Uses bookstore API to communicate with data. Built with React and Redux.',
    image: './images/bookstore.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'API',
    ],
    liveVersionLink: 'https://bookstore-kn2l.onrender.com/',
    SourceLink: 'https://github.com/SnakyMz/Bookstore',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'Space Travellers Hub',
    description: 'A website that displays rockets and missions from SpaceX. It also allows user to reserve any rocket/mission and displays them in the My Profile section. Built with React and Redux.',
    image: './images/spacehub.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'API',
    ],
    liveVersionLink: 'https://space-travellers-hub-y40g.onrender.com/',
    SourceLink: 'https://github.com/SnakyMz/Space-Travellers-Hub',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'Karnataka Weather',
    description: 'A website that displays a list of cities. It also displays their respective temperature, weather status, and many more. Built with React and Redux.',
    image: './images/karnatakaweather.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'API',
    ],
    liveVersionLink: 'https://karnataka-weather.onrender.com/',
    SourceLink: 'https://github.com/SnakyMz/Karnataka-weather',
    company: 'Freelance',
    year: '2023',
    stack: 'Front End Dev',
  },
  {
    name: 'Recipe App',
    description: 'Recipe App is a app containing data about foods, recipes, and shopping lists. Built with Ruby on Rails and Tailwind.',
    image: './images/recipeapp.png',
    technologies: [
      'HTML',
      'Tailwind CSS',
      'Ruby on Rails',
    ],
    liveVersionLink: 'https://recipe-app-t2ko.onrender.com/',
    SourceLink: 'https://github.com/JavierAybar/Recipe-app',
    company: 'Freelance',
    year: '2023',
    stack: 'Full Stack Dev',
  },
];

const popup = document.querySelector('.overlay');
const closePopup = document.querySelector('.closebtn');
const subDesc = document.querySelector('.popsubdesc');
const workImg = document.querySelector('.popImg');
const popupTitle = document.querySelector('.poptitle');
const popupContent = document.querySelector('.pop-work');
const skillsDiv = document.querySelector('.poplangs');
const workDesc = document.querySelector('.popdesc');
const liveBtn = document.querySelector('.lbtn');
const sourceBtn = document.querySelector('.sbtn');

const generatePopup = (index) => {
  skillsDiv.innerHTML = '';
  popupTitle.innerText = projects[index].name;
  workImg.src = projects[index].image;
  workDesc.innerText = projects[index].description;
  projects[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.innerText = skill;
    skillsDiv.appendChild(li);
  });
  subDesc.innerHTML = `
  <p class="descA">${projects[index].company}</p>
  <img src="./images/Counter.svg" alt="counter">
  <p class="grey">${projects[index].stack}</p>
  <img src="./images/Counter.svg" alt="counter">
  <p class="grey">${projects[index].year}</p>
  `;
  liveBtn.onclick = () => {
    window.location.href = `${projects[index].liveVersionLink}`;
  };
  sourceBtn.onclick = () => {
    window.location.href = `${projects[index].SourceLink}`;
  };
};
const windowPop = (index) => {
  popupContent.style.display = 'block';
  popup.style.display = 'block';
  generatePopup(index);
};

closePopup.addEventListener('click', () => {
  popupContent.style.display = 'none';
  popup.style.display = 'none';
});

const workspace = document.querySelector('#workspace');
const generateProjects = () => {
  projects.forEach((work, index) => {
    const works = document.createElement('div');
    works.className = 'works';
    if (index % 2 === 0) {
      works.className = 'works';
    } else {
      works.className = 'works alt';
    }
    works.innerHTML = `
      <img src="${work.image}" class="workimage" alt="${work.name}">
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
    work.technologies.forEach((lang) => {
      const li = document.createElement('li');
      li.innerHTML = lang;
      langs.appendChild(li);
    });
    worktext.appendChild(langs);

    const seeProject = document.createElement('button');
    seeProject.innerHTML = 'See project';
    seeProject.className = 'see-project btn';
    seeProject.type = 'button';
    seeProject.addEventListener('click', () => windowPop(index));
    worktext.appendChild(seeProject);

    works.appendChild(worktext);
    workspace.appendChild(works);
  });
};

window.onload = () => {
  generateProjects();
};

const resumeBtn = document.querySelector('#resumeBtn');
resumeBtn.onclick = () => {
  window.location.href = 'https://docs.google.com/document/d/1NwLvWyHIA66iw8h29ICGFxuFsKrjA01wvvti6-gBosE/edit?usp=sharing';
};

const form = document.querySelector('#form');
const errorMail = document.querySelector('#mail-error');
const email = document.querySelector('#email');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorMail.innerText = '';
  if (/[a-z]/.test(email.value) && /[A-Z]/.test(email.value)) {
    errorMail.innerText = 'Please a provide valid lowercase email address';
  } else {
    form.submit();
  }
});

const fullname = document.querySelector('#fullname');
const message = document.querySelector('#message');

const inputData = {};
const storage = window.localStorage;

const formUpdate = () => {
  inputData.fullname = fullname.value;
  inputData.email = email.value;
  inputData.message = message.value;
  storage.setItem('formData', JSON.stringify(inputData));
};

fullname.addEventListener('change', formUpdate);
email.addEventListener('change', formUpdate);
message.addEventListener('change', formUpdate);

function populateForm() {
  const parsingData = storage.getItem('formData');
  const outputData = JSON.parse(parsingData);
  fullname.value = outputData.fullname;
  email.value = outputData.email;
  message.value = outputData.message;
}
populateForm();