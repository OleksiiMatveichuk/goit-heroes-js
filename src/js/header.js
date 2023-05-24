import { api } from './low-level/api';
import debounce from 'lodash.debounce';
import { infoSys } from './infoMess';

const searchInput = document.querySelector('.header-input');

// console.log('Run header.js');
//==========================================================================
let currentPage = 1; //=====активна page по замовченню 1 сторінка===================

let pageCount; //=====кількість карток в галереї всього =====

let paginationLimit; //=====кількісь сарток які ми дозволяємо відмалювати
let nextButton; //кнопки в пагінації >
let prevButton; //кнопки в пагінації  <
let limitButton = 10; //max кількість кнопок які ми хоче бачити в нашій пагінації  по замовченню 10
let galleryList;

//================================================
let redrawDirection; //направленіе перерісовкі

searchInput.addEventListener('click', () => {
  // Устанавливаем пустое значение в поле ввода
  searchInput.select();
});

// Validation Name
searchInput.addEventListener(
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
// ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
// debugger
if (parseInt(windowWidth, 10) < 375) windowWidth = '100';
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

window.addEventListener('load', async () => {
  const savedValue = localStorage.getItem('searchValue');
  if (savedValue) {
    // Если значение сохранено, вставляем его в инпут
    const searchInput = document.querySelector('.header-input');
    searchInput.value = savedValue;
  }
  if (window.location.pathname.includes('page-2.html')) {
    // const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      // Если значение сохранено, вставляем его в инпут
      // const searchInput = document.querySelector('.header-input');
      // searchInput.value = savedValue;
      const formStartWith = document.querySelector('#name');
      formStartWith.value = savedValue;
    }
    galleryList = document.querySelector('.gallery'); //const
    galleryList.scrollIntoView({ behavior: 'smooth' });
    galleryList.setAttribute('data-limits', itemsOnPage);
    galleryList.innerHTML = '';
    galleryList.innerHTML = await createGallery(savedValue || '');
    //await createPaginator(galleryList);
    await newPaginator();
  }
});

// Go to new window

const form = document.querySelector('#search-form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  let searchQuery = searchInput.value.trim();
  const url = `./page-2.html`;
  if (
    window.location.href === window.location.origin + '/' ||
    window.location.pathname.includes('index.html')
  ) {
    localStorage.setItem('searchValue', searchQuery);
    window.location.href = url;
  } else if (window.location.pathname.includes('page-2.html')) {
    searchQuery = searchInput.value;
    let name = document.querySelector(`[name="name"]`);
    name.value = searchInput.value;
    galleryList = document.querySelector('.gallery'); // const

    galleryList.innerHTML = '';
    // console.log('input', searchQuery);
    galleryList.innerHTML = await createGallery(searchQuery);
    localStorage.removeItem('searchValue');
    await newPaginator();
  }
});

import { galleryItem, renderGallery } from './get-gallery-list';
import { errorGallery, errorAPI } from './error-gallery';
import { createPagination } from './createPagination';

async function createGallery(searchQuery) {
  try {
    // console.log('itemsOnPage=', itemsOnPage);
    const data = await api.getAllCharacters({
      nameStartsWith: searchQuery,
      limit: itemsOnPage,
    });
    const results = data.results;
    // console.log(data);
    // console.log(results);
    const galleryList = document.querySelector('.gallery');
    galleryList.setAttribute('data-total', data.total);
    galleryList.setAttribute('data-offset', data.offset);

    if (results.length === 0) {
      // console.log('NOT FOUND!!!! script header');
      return errorGallery();
    }
    return renderGallery(results);
  } catch (e) {
    return errorAPI('Too Many Requests...');
  }
}
//===================================================
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
//*********************** */

// console.log('Run all_charaster');
let dateVal = null;
let comic = document.querySelector(`[name="comic"]`);
let name = document.querySelector(`[name="name"]`);
let order = document.querySelector(`[name="order"]`);
let date = document.querySelector(`[name="date"]`);
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

async function handleActivePageNumber(e) {
  if (e) {
    const button = e.target;
    console.log('  НОМЕр', Number(button.getAttribute('page-index')));
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
        // console.log(`click pagination button with ${currentPage} NUmber`);
        galleryList.innerHTML = await createGallery(); //currentPage;
      } else {
        // console.log('перемалювати---- пагінатор');
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
  //***************** */
  galleryList.innerHTML = '';
  // console.log(`click pagination button with ${currentPage} NUmber`);
  galleryList.innerHTML = await createFilterGallery(currentPage);
  // currentPage = 1
  await newPaginator();
  // handlePageButtonsStatus();
}

const setCurrentPage = pageNum => {
  currentPage = pageNum;
  console.log('PAGE', pageNum);
  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
};
