import Hammer from 'hammerjs';

const heroSlides = document.querySelectorAll('.hero-slide');
const paginationItems = document.querySelectorAll('.hero-pagination-item');
const heroSection = document.querySelector('.hero-section');

const heroSlideArr = Array.from(heroSlides);
const paginationItemsArr = Array.from(paginationItems);
let activeSlide = 0;

// функція зміни зображення

function setActiveSlide(slideNumber) {
  heroSlideArr.forEach((element, index) => {
    if (index === slideNumber) {
      const mod = element.dataset.mod;
      element.classList.remove('visually-hidden');
      heroSection.dataset.mod = mod;
    } else {
      element.classList.add('visually-hidden');
    }
  });
}

// функція зміни пагінації

function setActivePagination(paginationNumber) {
  paginationItemsArr.forEach((element, index) => {
    if (index === paginationNumber) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// функція для автоматичної зміни слайдів кожні 4 секунди

function autoChangeSlide() {
  nextSlide();
  setActiveSlide(activeSlide);
  setActivePagination(activeSlide);
}

// присвоєння event на click

paginationItemsArr.forEach(element => {
  element.addEventListener('click', () => {
    activeSlide = +element.dataset.index;
    setActiveSlide(activeSlide);
    setActivePagination(activeSlide);
  });
});

// присвоєння event на svipe за допомогою бібліотеки hammerjs

heroSlideArr.forEach(element => {
  const mc = new Hammer(element);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  mc.on('swipeleft swiperight swipeup swipedown', ev => {
    const width = window.innerWidth;
    const isTablet = width > 767 && width < 1399;

    if (isTablet) {
      if (ev.type === 'swipeleft') {
        nextSlide();
      } else if (ev.type === 'swiperight') {
        prevSlide();
      }
    } else {
      if (ev.type === 'swipeup') {
        nextSlide();
      } else if (ev.type === 'swipedown') {
        prevSlide();
      }
    }

    setActiveSlide(activeSlide);
    setActivePagination(activeSlide);
  });
});

// фунція відображення наступного слайду

function nextSlide() {
  if (activeSlide === 2) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
}

// функція відображення попереднього слайду

function prevSlide() {
  if (activeSlide === 0) {
    activeSlide = 2;
  } else {
    activeSlide--;
  }
}

setInterval(autoChangeSlide, 5000);
