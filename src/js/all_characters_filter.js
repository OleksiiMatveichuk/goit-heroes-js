import debounce from 'lodash.debounce';

import { infoSys } from './infoMess';

import { createPagination } from './createPagination';

import { createModalOn } from './createModalOn';
//import { createModalTwo } from './modal-two';

let currentPage = 1; //=====активна page по замовченню 1 сторінка===================

let pageCount; //=====кількість карток в галереї всього =====

let paginationLimit; //=====кількісь сарток які ми дозволяємо відмалювати
let nextButton; //кнопки в пагінації >
let prevButton; //кнопки в пагінації  <
let limitButton = 10; //max кількість кнопок які ми хоче бачити в нашій пагінації  по замовченню 10
let redrawDirection; //направленіе перерісовкі

const form = document.querySelector('.filter-form');
let comic = document.querySelector(`[name="comic"]`);
let name = document.querySelector(`[name="name"]`);
let order = document.querySelector(`[name="order"]`);
let date = document.querySelector(`[name="date"]`);
const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', clickCard);

let dateVal = null;

let yearsToSelect = '';
yearsToSelect += `<option>All Years</option>
<option class="defolt-options">-----------</option>`;

for (let i = 1939; i <= 2023; i++) {
  yearsToSelect += `<option>${i}</option>`;
}
date.insertAdjacentHTML('beforeend', yearsToSelect);

date.addEventListener('change', onDateSelect);
async function onDateSelect(e) {
  e.preventDefault;
  if (e.target.value === 'All Years') {
    dateVal = null;
  } else {
    dateVal = e.target.value;
  }
}

// Validation comics ID
comic.addEventListener(
  'input',
  debounce(function (event) {
    const input = event.target;
    const value = input.value;
    const onlyDigits = /^\d*$/.test(value); // Regular expression to match only digits

    if (!onlyDigits) {
      input.value = value.replace(/\D/g, ''); // Remove non-digit characters from the value
      infoSys('warn', 'Only Numbers can be entered...');
    }
  }, 500)
);
// Validation Name
name.addEventListener(
  'input',
  debounce(function (event) {
    const input = event.target;
    const value = input.value;
    const validCharacters = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/;

    if (!validCharacters.test(value)) {
      input.value = value.replace(
        /[^a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
        ''
      );
      infoSys('warn', 'Please, use English keyboard layout only.');
    }
  }, 500)
);

const searchInput = document.querySelector('.header-input');
searchInput.addEventListener('input', debounce(inputHandler, 500));
async function inputHandler() {
  const query = this.value.trim();

  if (query.length < 2) {
    // Hide the results if the query is too short
    this.setAttribute('list', '');
    return;
  }
  const data = await api.getAllCharacters({ nameStartsWith: query });
  const results = data.results;

  const dataList = document.createElement('datalist');
  dataList.id = 'search-results';

  results.forEach(result => {
    const option = document.createElement('option');
    option.value = result.name;
    dataList.appendChild(option);
  });

  const existingDataList = document.querySelector('#search-results');
  if (existingDataList) {
    existingDataList.replaceWith(dataList);
  } else {
    this.after(dataList);
  }
  this.setAttribute('list', 'search-results');
}

// ШУКАЮ ШИРИНУ КОНТЕЙНЕРА
const container = document.querySelector('.container');
let windowWidth = window.getComputedStyle(container).width;

let itemsOnPage = null;
let paginationTotal = null;
// ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
// debugger
if (parseInt(windowWidth, 10) < 375) windowWidth = '100';

// console.log("ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ = ", windowWidth)
switch (windowWidth) {
  case '375px':
    itemsOnPage = 4;
    break;
  case '100':
    itemsOnPage = 4;
    break;
  case '1440px':
    itemsOnPage = 16;
    break;

  default:
    itemsOnPage = 8;
    break;
}
galleryList.setAttribute('data-limits', itemsOnPage);

import { galleryItem, renderGallery } from './get-gallery-list';
import { api } from './low-level/api';
import { errorGallery } from './error-gallery';
// console.log('Run all_charaster');
async function createFilterGallery(curPage = 0) {
  try {
    const orderText = order.value.toLowerCase();
    // console.log("comics", comic.value)
    // console.log("order", orderText)
    // console.log("name", name.value)
    // console.log("year", dateVal)
    // const offsetValue = galleryList.dataset.offset;
    let offsetValue = 0;
    if (curPage != 1) {
      offsetValue = (curPage - 1) * itemsOnPage;
    }
    if (!curPage) {
      offsetValue = 0;
    }

    const data = await api.getAllCharacters({
      nameStartsWith: name.value,
      limit: itemsOnPage,
      offset: offsetValue,
      comics: comic.value,
      orderBy: orderText,
      modifiedSince: '01/01/' + dateVal,
    });

    const results = data.results;
    galleryList.setAttribute('data-total', data.total);
    galleryList.setAttribute('data-offset', data.offset);
    if (results.length === 0) {
      // console.log('NOT FOUND!!!! script all_caharasters_filter');
      return errorGallery();
    }
    return renderGallery(results);
  } catch (e) {
    console.log(e);
  }
}

form.addEventListener('change', async event => {
  event.preventDefault();
  const yesPagination = document.querySelector('.pagination-container');
  if (yesPagination) {
    yesPagination.remove();
  }
  localStorage.setItem('searchValue', name.value);
  searchInput.value = name.value;
  console.log('REBUILD LIST - change on FORM');
  galleryList.innerHTML = '';
  galleryList.innerHTML = await createFilterGallery();
  //=====Pagination==================================================
  await newPaginator();

  // await createPaginator();

  // const paginationNumbers = document.getElementById('pagination-numbers');
  // paginationNumbers.addEventListener('click', handleActivePageNumber);
  // nextButton = document.getElementById('next-button');
  // prevButton = document.getElementById('prev-button');

  // handlePageButtonsStatus();
  // //setCurrentPage(currentPage);
  // nextButton.addEventListener('click', nextClick);
  // prevButton.addEventListener('click', prevClick);
});

async function newPaginator() {
  const yesPagination = document.querySelector('.pagination-container'); //перевіряємо може у нас е пагінатор і ми його видаляємо
  if (yesPagination) {
    yesPagination.remove();
  }
  await createPaginator();
  //після побудови пагінатора ми на ного робимо всі посилання
  const paginationNumbers = document.getElementById('pagination-numbers');
  paginationNumbers.addEventListener('click', handleActivePageNumber);
  nextButton = document.getElementById('next-button');
  prevButton = document.getElementById('prev-button');

  handlePageButtonsStatus();

  nextButton.addEventListener('click', nextClick);
  prevButton.addEventListener('click', prevClick);
}

async function canWeMove(simbol) {
  //console.log(currentPage);
  const buttons = document.querySelectorAll('.pagination-number');
  let activIn = 0;
  let poiskIn = 0;
  buttons.forEach((button, i) => {
    // if (button.getAttribute('page-index') === '...') {
    //   poiskIn = i;
    //   console.log(simbol, 'poiskIn ', poiskIn);
    // }

    if (simbol === '>') {
      poiskIn = limitButton - 2;
    } else {
      poiskIn = 1;
    }
    if (button.classList.contains('active')) {
      activIn = i;
    }
  });

  if (simbol === '>') {
    if (poiskIn - activIn === 1) {
      // гаступна кнопка '...' забороняємо ходити
      redrawDirection = {
        direction: '>',
        button: currentPage,
      };
      // const yesPagination = document.querySelector('.pagination-container');
      // if (yesPagination) {
      //   yesPagination.remove();
      // }
      await newPaginator();

      return false;
    }
  } else {
    if (activIn - poiskIn === 1) {
      // гаступна кнопка '...' забороняємо ходити
      redrawDirection = {
        direction: '<',
        button: currentPage,
      };

      await newPaginator();

      return false;
    }
  }
  return true;
}

function nextClick() {
  //первіряємо кількість дозволених сторінок
  //треба перевірити чи не буде наступнти баттоном "..." якщо так то перерисовуємо paginator canWeMove
  if (!canWeMove('>')) {
    return;
  }

  if (currentPage === Math.ceil(pageCount / paginationLimit)) {
    //вдарили по останній макс кнопці сторінці
    handlePageButtonsStatus();
    return;
  }
  currentPage += 1;
  setCurrentPage(currentPage);
}
function prevClick() {
  //console.log('');
  if (!canWeMove('<')) {
    return;
  }
  if (currentPage === 1) {
    return;
  }
  currentPage -= 1;

  setCurrentPage(currentPage);
}

function clickCard(e) {
  if (e.target.classList.value === 'gallery-image') {
    const id = Number(e.target.closest('li').dataset.id);

    createModalOn(id, '');
  }
}

//=============================================================================================

async function createPaginator() {
  paginationLimit = galleryList.dataset.limits;
  pageCount = galleryList.dataset.total;

  const markup = await createPagination(
    paginationLimit,
    pageCount,
    limitButton,
    currentPage,
    redrawDirection
  );

  galleryList.insertAdjacentHTML('afterend', markup);
}

function disableButton(button) {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
}

function enableButton(button) {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
}

function handlePageButtonsStatus() {
  if (currentPage === 1) {
    //console.log('prevButton', prevButton);
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  // debugger

  // console.log(Math.ceil(pageCount / paginationLimit), '===', currentPage);

  if (Math.ceil(pageCount / paginationLimit) === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
}

async function handleActivePageNumber(e) {
  if (e) {
    const button = e.target;
    if (currentPage !== Number(button.getAttribute('page-index'))) {
      //забороняємо щось робити якщо вдарили по активному button

      if (button.getAttribute('page-index') !== '...') {
        currentPage = Number(button.getAttribute('page-index'));
        document.querySelectorAll('.pagination-number').forEach(button => {
          button.classList.remove('active');
          const pageIndex = Number(button.getAttribute('page-index'));
          if (pageIndex == currentPage) {
            button.classList.add('active');
          }
        });
        // !!!

        if (currentPage === Math.ceil(pageCount / paginationLimit)) {
          //вдарили по максимальній чторінці

          const yesPagination = document.querySelector('.pagination-container');
          if (yesPagination) {
            yesPagination.remove();
          }
          await newPaginator();
        }

        //перемальовуємо пагінацію
        galleryList.innerHTML = '';
        console.log(`click pagination button with ${currentPage} NUmber`);
        galleryList.innerHTML = await createFilterGallery(currentPage);
      } else {
        console.log('перемалювати---- пагінатор');
      }
    }
    // !!!
  } else {
    document.querySelectorAll('.pagination-number').forEach(button => {
      button.classList.remove('active');
      const pageIndex = Number(button.getAttribute('page-index'));
      //console.log('pageIndex  ===', pageIndex, 'currentPage', currentPage);
      if (pageIndex === currentPage) {
        button.classList.add('active');
      }
    });
  }
  handlePageButtonsStatus();
}

const setCurrentPage = pageNum => {
  currentPage = pageNum;
  console.log('PAGE', pageNum);
  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
};
