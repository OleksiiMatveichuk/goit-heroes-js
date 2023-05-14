import { galleryItem } from './get-gallery-list';
import { api } from './low-level/api';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const comicsFilter = document.querySelector('#comic');
const nameFilter = document.querySelector('#name');
const orderFilter = document.querySelector('#order');
const dateFilter = document.querySelector('#date');

comicsFilter.addEventListener('input', handleInput);

async function handleInput(event) {
  event.preventDefault();
}

async function createGallery() {
  try {
    const { comics } = await getCharacters();

    const heroCard = galleryItem(comics);
    gallery.insertAdjacentHTML('beforeend', heroCard.join(''));

    if (comics.value === comicsFilter.value) {
    }
  } catch {
    console.log('eroor');
  }
}
