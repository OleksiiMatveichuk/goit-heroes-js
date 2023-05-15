const heroSlides = document.querySelectorAll('.hero-slide');
const paginationItems = document.querySelectorAll('.hero-pagination-item');
const heroSection = document.querySelector('.hero-section');

const heroSlideArr = Array.from(heroSlides);
const paginationItemsArr = Array.from(paginationItems);

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

paginationItemsArr.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        const index = +element.dataset.index;
        console.log(index);
        setActiveSlide(index);
        setActivePagination(index);
    })
});
