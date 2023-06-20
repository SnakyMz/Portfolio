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
for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('click', () => {
    poping();
  });
}