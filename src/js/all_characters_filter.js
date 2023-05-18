import debounce from 'lodash.debounce';

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
console.log('select date', date);
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
console.log('Run all_charaster');
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
      console.log('NOT FOUND!!!! script all_caharasters_filter');
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
