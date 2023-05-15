import { renderGallery } from './get-gallery-list';
import { api } from './low-level/api';
import debounce from 'lodash.debounce';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const comicsFilter = document.querySelector('#comic');

form.addEventListener('input', debounce(handleInput, 300));

async function handleInput(event) {
  event.preventDefault();
  createGallery();
}

async function createGallery() {
  try {
    const searchQuery = Number(comicsFilter.value.trim());
    const data = await api.getCharactersByComicsId({ comicId: searchQuery });
    const result = data.results;

    const heroCard = renderGallery(data);
    gallery.insertAdjacentHTML('beforeend', heroCard.join(''));
  } catch {
    console.log('error');
  }
}

// const container = document.querySelector('.container');
// let windowWidth = window.getComputedStyle(container).width;
// let itemsOnPage = null;
// // ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
// // debugger
// switch (windowWidth) {
//   case '375px':
//     itemsOnPage = 5;
//     break;
//   case '100%':
//     itemsOnPage = 5;
//     break;
//   case '1440px':
//     itemsOnPage = 16;
//     break;

//   default:
//     itemsOnPage = 8;
//     break;
// }
