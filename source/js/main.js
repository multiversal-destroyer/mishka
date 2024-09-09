// Menu
const header = document.querySelector('.header'),
      toggleButton = document.querySelector('.header-navigation__toggle');

toggleButton.onclick = function() {
  header.classList.toggle('header--open');
};

// Slider
const sliderItem = document.querySelectorAll('.review__item'),
      sliderList = document.querySelector('.review__list'),
      sliderButtonNext = document.querySelector('.review-controls__button--next'),
      sliderButtonPrev = document.querySelector('.review-controls__button--prev');

let sliderCount = 0,
    sliderWidth;

showSlide();

window.onresize = showSlide;

sliderButtonNext.onclick = nextSlide;
sliderButtonPrev.onclick = prevSlide;

function showSlide() {
  sliderWidth = document.querySelector('.review').offsetWidth;
  sliderList.style.width = sliderWidth * sliderItem.length + 'px';
  sliderItem.forEach(item => item.style.width = sliderWidth + 'px');

  rollSlider();
}

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderItem.length) sliderCount = 0;
  console.log(sliderCount);

  rollSlider();
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderItem.length - 1;
  console.log(sliderCount);

  rollSlider();
}

function rollSlider() {
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
