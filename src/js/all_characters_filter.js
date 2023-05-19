import debounce from 'lodash.debounce';

import { createPagonation } from './createPagination';
import { createModalOn } from './createModalOn';
//import { createModalTwo } from './modal-two';

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
//console.log('select date', date);
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
comic.addEventListener('input', function (event) {
  const input = event.target;
  const value = input.value;
  const onlyDigits = /^\d*$/.test(value); // Regular expression to match only digits

  if (!onlyDigits) {
    input.value = value.replace(/\D/g, ''); // Remove non-digit characters from the value
  }
});
// Validation Name
name.addEventListener('input', function (event) {
  const input = event.target;
  const value = input.value;
  const validCharacters = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/;

  if (!validCharacters.test(value)) {
    input.value = value.replace(
      /[^a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
      ''
    );
  }
});

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
async function createFilterGallery() {
  try {
    const orderText = order.value.toLowerCase();
    // console.log("comics", comic.value)
    // console.log("order", orderText)
    // console.log("name", name.value)
    // console.log("year", dateVal)
    const offsetValue = galleryList.dataset.offset;
    const data = await api.getAllCharacters({
      nameStartsWith: name.value,
      limit: itemsOnPage,
      offset: offsetValue,
      comics: comic.value,
      orderBy: orderText,
      modifiedSince: '01/01/' + dateVal,
    });
    console.log('Data after request', data);
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
  localStorage.setItem('searchValue', name.value);
  searchInput.value = name.value;
  galleryList.innerHTML = '';
  galleryList.innerHTML = await createFilterGallery();
  //=====Pagination==================================================
  await createPaginator();

  const paginationNumbers = document.getElementById('pagination-numbers');
  paginationNumbers.addEventListener('click', handleActivePageNumber);
});

{
  /* <button class="get">GET</button>
const btn = document.querySelector(".get")
btn.addEventListener("click", async (event) => {

    // event.preventDefault();
    const galleryList = document.querySelector('.gallery');
    galleryList.innerHTML = ''
    galleryList.innerHTML = await createFilterGallery()
    // localStorage.removeItem('searchValue');
    // createFilterGallery()
}) */
}

function clickCard(e) {
  if (e.target.classList.value === 'gallery-image') {
    const id = Number(e.target.closest('li').dataset.id);

    createModalOn(id, '');
  }
}

async function createPaginator() {
  // console.log(galleryList);
  const limit = 6;
  // galleryList.dataset.limits;
  const total = 78;

  // galleryList.dataset.total;

  // console.log(limit, ' ', total);
  const markup = await createPagonation(limit, total);
  console.log(markup);

  galleryList.insertAdjacentHTML('afterend', markup);
}

// setTimeout(async () => {
//   await createPaginator();
// }, 3500);

// const paginationNumbers = document.getElementById('pagination-numbers');
// paginationNumbers.addEventListener('click', handleActivePageNumber);
// const paginatedList = document.getElementById('paginated-list');

// const listItems = paginatedList.querySelectorAll('li');

// const nextButton = document.getElementById('next-button');
// const prevButton = document.getElementById('prev-button');

// function disableButton(button) {
//   button.classList.add('disabled');
//   button.setAttribute('disabled', true);
// }

// function enableButton(button) {
//   button.classList.remove('disabled');
//   button.removeAttribute('disabled');
// }

// function handlePageButtonsStatus() {
//   if (currentPage === 1) {
//     disableButton(prevButton);
//   } else {
//     enableButton(prevButton);
//   }

//   if (pageCount === currentPage) {
//     disableButton(nextButton);
//   } else {
//     enableButton(nextButton);
//   }
// }

function handleActivePageNumber(e) {
  const button = e.target;
  const currentPage = Number(button.getAttribute('page-index'));
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
}

// function setCurrentPage(pageNum) {
//   currentPage = pageNum;

//   const prevRange = (pageNum - 1) * paginationLimit;
//   const currRange = pageNum * paginationLimit;
//   listItems.forEach((item, index) => {
//     item.classList.add('hidden');
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove('hidden');
//     }
//   });
