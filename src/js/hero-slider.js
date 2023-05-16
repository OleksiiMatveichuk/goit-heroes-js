import * as Hammer from 'hammerjs';

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
            console.log(mod);
            element.classList.add("active");
            heroSection.dataset.mod = mod;
        } else {
            element.classList.remove("active");
        };
    });
}

// функція зміни пагінації

function setActivePagination(paginationNumber) {
    paginationItemsArr.forEach((element, index) => {
        if (index === paginationNumber) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        };
    });
}

// присвоєння event на click

paginationItemsArr.forEach((element) => {
    element.addEventListener('click', () => {
        activeSlide = +element.dataset.index;
        setActiveSlide(activeSlide);
        setActivePagination(activeSlide);
    })
});

// присвоєння event на svipe за допомогою бібліотеки hammerjs

heroSlideArr.forEach((element) => {
    const mc = new Hammer(element);
    mc.on("swipeleft swiperight", (ev) => {
        if (ev.type === 'swipeleft') {
            if (activeSlide === 2){
                activeSlide = 0;
            } else { 
               activeSlide++; 
            }
        } else {
            if (activeSlide === 0) {
                activeSlide = 2;
            } else {
               activeSlide--; 
            }
        }
        setActiveSlide(activeSlide);
        setActivePagination(activeSlide);
    });
})
