// Menu
const header = document.querySelector('.header');
const toggleButton = document.querySelector('.header-navigation__toggle');

toggleButton.onclick = function() {
  header.classList.toggle('header--open');
};

