// import './src/css/pagination.css';
import { createFilterGallery } from './all_characters_filter';

const galleryList = document.querySelector('.gallery');
console.log('galleryList :>> ', galleryList.attributes);

const limits = galleryList.dataset.limits;
const offset = galleryList.dataset['offset'];
const total = galleryList.dataset.total;
console.log('limits:>> ', limits);
console.log('offset :>> ', offset);
console.log('total :>> ', total);
console.log('galleryList.dataset :>> ', galleryList.dataset);

const refs = {
  paginationList: document.querySelector('.paginList'),
};

refs.paginationList.addEventListener('click', requestHandler);

export function createPaginationList(total, limit, offset) {
  paginationList.innerHTML = '';
  if (total < 1) {
    return;
  }
  const arr = [];
  const pages = Math.ceil(total / limit);
  const activePage = Math.ceil(offset / limit) + 1;
  for (let i = activePage; i <= pages; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    arr.push(li);
  }
  paginationList.append(...arr);
}

function handlePagination(target) {
  if ((target.localName = 'li')) {
    const offset = target.textContent * limit;
    console.log('offset :>> ', offset);
    getAllCharacters(offset);
    return offset;
  }
}

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(dish.dataset.id);
// });
