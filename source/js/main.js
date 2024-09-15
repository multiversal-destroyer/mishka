// Menu
const header = document.querySelector('.header'),
      toggleButton = document.querySelector('.header-navigation__toggle');

toggleButton.onclick = function() {
  header.classList.toggle('header--open');
};

// Slider
if (document.querySelector('.review')) {

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
};

// Modal
if (document.querySelector('.modal')) {

  const modal = document.querySelector('.modal'),
        openModalButtons = document.querySelectorAll('.featured-card__button, .video__button');

  openModalButtons.forEach(button => {
    button.onclick = function() {
      modal.style.visibility = 'visible';
    };
  });

  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.visibility = 'hidden';
    }
  };

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      modal.style.visibility = 'hidden';
    }
  });
};

// Video
if (document.querySelector('.video')) {

  const videoplayer = document.querySelector(".video__player");

  function playVideo() {

    if (videoplayer) {
      videoplayer.style.display = "block";
    };
  };
};
