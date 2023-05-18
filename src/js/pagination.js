import '../css/pagination.css';
import { createFilterGallery } from './all_characters_filter';
// import {} ;

const galleryList = document.querySelector('.gallery');
const limits = galleryList.dataset.limits;
const offset = galleryList.dataset.offset;
const total = galleryList.dataset.total;
console.log('galleryList :>> ', galleryList.attributes);
console.log('galleryList.dataset :>> ', galleryList.dataset);
console.log('limits:>> ', limits);
console.log('offset :>> ', offset);
console.log('total :>> ', total);

refs.paginationList.addEventListener('click', requestHandler);

export function createPaginationList(total, limit, offset) {
  // paginationList.innerHTML = '';
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
  galleryList.append(...arr);
}

createPaginationList(220, 8, 40);
function handlePagination(target) {
  if ((target.localName = 'li')) {
    const offset = target.textContent * limit;
    console.log('offset :>> ', offset);
    getAllCharacters(offset);
    return offset;
  }
}
