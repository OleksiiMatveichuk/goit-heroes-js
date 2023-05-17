import '../css/pagination.css';
import { createFilterGallery } from './all_characters_filter';

const galleryList = document.querySelector('.gallery');
console.log('galleryList :>> ', galleryList.attributes);

const limits = galleryList.dataset.limits;
const offset = galleryList.dataset.offset;
const total = galleryList.dataset.total;
console.log('limits:>> ', limits);
console.log('offset :>> ', offset);
console.log('total :>> ', total);
console.log('galleryList.dataset :>> ', galleryList.dataset);
console.log(galleryList.getDataAttr);
const params = Array.from(galleryList.dataset);
console.log('galleryList.length :>> ', galleryList.length);

const refs = {
  sectionFilter: document.querySelector('.section-filter'),
};

// refs.paginationList.addEventListener('click', requestHandler);

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
  console.log('pages :>> ', pages);
  console.log('activePage :>> ', activePage);
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

// export const key = {
//   publickey: '3e8547eb41b42a9a2a1ebdd17f3eee37',
//   privatekey: '1eb0a59387ba717430ceb4d1fa44d25acc6fdeb0',
// };
