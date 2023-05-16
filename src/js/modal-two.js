// getCharactersByComicsId
import { api } from './low-level/api';

export async function createModalTwo() {
  // document.body.style.overflow = 'hidden';

  const id = 37421;

  const API = await api.getComicById({ comicId: id });
  console.log('API :>> ', API);

  const body = document.body;
  const modal = modalTwo(API);

  body.insertAdjacentHTML('afterbegin', modal);

  const closeModal = document.querySelector('.bacground-mod-two');
  const closeBtn = document.querySelector('.mod-two-buttom');

  closeModal.addEventListener('click', closeModal);

  closeBtn.addEventListener('click', closeModal);
}

function modalTwo(arr) {
  return `
  <div class="bacground-mod-two">
    <div class="modal-two">
      <button class="mod-two-buttom" type="button" data-modal-close>
        <svg width="14" height="14">
          <use class="mod-two-close" href="./images/symbol-defs.svg#icon-close"></use>
        </svg>
      </button>
      <div class="mod-two-first-gallery">
        <img class="mod-two-first-img" src="${arr[0].thumbnail.path}.${
    arr[0].thumbnail.extension
  }" alt="" />
        <ul class="mod-two-gallery">
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${arr[0].images[1].path}.${
    arr[0].images[1].extension
  }" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${arr[0].images[2].path}.${
    arr[0].images[2].extension
  }" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${arr[0].images[3].path}.${
    arr[0].images[3].extension
  }" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${arr[0].images[4].path}.${
    arr[0].images[4].extension
  }" alt="" />
          </li>
        </ul>
      </div>
      <div class="modal-two-setion-two">
        <div class="mod-two-date-blok">
          <h2 class="mod-two-primary-header">${arr[0].title}</h2>
          <div class="mod-two-date">
            <h3 class="mod-two-avtor">Chip Zdarsky</h3>

            <h3>December 07, 2022</h3>
          </div>
        </div>
        <p class="mod-two-text">${arr[0].description}</p>
        <ul class="modal-two-info">
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Format</h3>
            <p>${arr[0].format}</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Year released</h3>
            <p>${arr[0].dates[0].date.slice(0, 4)}</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Pages</h3>
            <p>${arr[0].pageCount}</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Price</h3>
            <p>$ ${arr[0].prices[0].price}</p>
          </li>
        </ul>
        <h2 class="mod-two-creator-header">Creator</h2>
        <div class="mod-two-creator">
          <img class="mod-two-img-creator" src="../images/remove_img/malenkoe.png" alt="" />
          <div>
            <h3 class="mod-two-creator-job-title">${
              arr[0].creators.items[0].role
            }</h3>
            <p>${arr[0].creators.items[0].name}</p>
          </div>
        </div>
        <h2 class="mod-two-charaters-header">Characters</h2>
        <ul class="mod-two-charaters-gallery">
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${arr[0].characters.items[0].name}</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${arr[0].characters.items[1].name}</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${arr[0].characters.items[2].name}</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${arr[0].characters.items[3].name}</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
    `;
}

function closeModal(e) {
  if (
    e.target.classList.value === 'bacground-mod-two' ||
    e.target.classList.value === 'mod-two-buttom'
  ) {
    const modal1 = document.querySelector('.bacground-modal');
    document.body.style.overflow = '';
    startSlider(0);
    modal1?.remove();
  }
}
