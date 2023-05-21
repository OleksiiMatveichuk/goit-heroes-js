import { api } from './low-level/api';
import debounce from 'lodash.debounce';
import { infoSys } from './infoMess'
const searchInput = document.querySelector('.header-input');

// console.log('Run header.js');

searchInput.addEventListener('click', () => {
  // Устанавливаем пустое значение в поле ввода
  searchInput.select();
});

// Validation Name
searchInput.addEventListener('input', debounce(function (event) {
  const input = event.target;
  const value = input.value;
  const validCharacters = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/;

  if (!validCharacters.test(value)) {
    input.value = value.replace(
      /[^a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
      ''
    );
    infoSys("warn", "Please, use English keyboard layout only.")
  }
}, 500));



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
    const galleryList = document.querySelector('.gallery');
    galleryList.scrollIntoView({ behavior: 'smooth' });
    galleryList.setAttribute('data-limits', itemsOnPage);
    galleryList.innerHTML = '';
    galleryList.innerHTML = await createGallery(savedValue || '');
    await createPaginator(galleryList);
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
    const galleryList = document.querySelector('.gallery');

    galleryList.innerHTML = '';
    // console.log('input', searchQuery);
    galleryList.innerHTML = await createGallery(searchQuery);
    localStorage.removeItem('searchValue');
  }
});

import { galleryItem, renderGallery } from './get-gallery-list';
import { errorGallery, errorAPI } from './error-gallery';
import { createPagonation } from './createPagination';
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

async function createPaginator(gallary) {
  // console.log(galleryList);
  const limit = gallary.dataset.limits;
  const total = gallary.dataset.total;

  // console.log(limit, ' ', total);
  //const markup = await createPagonation(limit, total);
  // console.log(markup);

  gallary.insertAdjacentHTML('afterend', markup);
}
