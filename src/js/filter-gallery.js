import { galleryItem } from './get-gallery-list';
import { api } from './low-level/api';
import debounce from 'lodash.debounce';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const comicsFilter = document.querySelector('#comic');
const nameFilter = document.querySelector('#name');
const orderFilter = document.querySelector('#order');

console.log(gallery);

comicsFilter.addEventListener('input', debounce(handleInput, 300));

async function handleInput(event) {
  event.preventDefault();
  createGallery();
}

async function createGallery() {
  try {
    const data = await api.getCharactersByComicsId(comics);

    const heroCard = galleryItem(data);
    gallery.insertAdjacentHTML('beforeend', heroCard.join(''));

    if (comics.value === comicsFilter.value) {
    }
  } catch {
    console.log('error');
  }
}

const container = document.querySelector('.container');
let windowWidth = window.getComputedStyle(container).width;
let itemsOnPage = null;
// ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
// debugger
switch (windowWidth) {
  case '375px':
    itemsOnPage = 5;
    break;
  case '100%':
    itemsOnPage = 5;
    break;
  case '1440px':
    itemsOnPage = 16;
    break;

  default:
    itemsOnPage = 8;
    break;
}
