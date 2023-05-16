// getCharactersByComicsId
import { api } from './low-level/api';

export async function createModalTwo() {
  // document.body.style.overflow = 'hidden';

  const id = 37421;

  const API = await api.getCharactersByComicsId({ comicId: id });
  console.log('API :>> ', API);

  const body = document.body;
  const modal = modalTwo();

  body.insertAdjacentHTML('afterbegin', modal);

  const closeModal = document.querySelector('.bacground-mod-two');
  const closeBtn = document.querySelector('.mod-two-buttom');

  closeModal.addEventListener('click', closeModal);

  closeBtn.addEventListener('click', closeModal);
}

function modalTwo() {
  return `
  <div class="bacground-mod-two">
    <div class="modal-two">
      <button class="mod-two-buttom" type="button" data-modal-close>
        <svg width="14" height="14">
          <use class="mod-two-close" href="./images/symbol-defs.svg#icon-close"></use>
        </svg>
      </button>
      <div class="mod-two-first-gallery">
        <img class="mod-two-first-img" src="../images/remove_img/bolshoe.png" alt="" />
        <ul class="mod-two-gallery">
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="../images/remove_img/srednee.png" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="../images/remove_img/srednee.png" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="../images/remove_img/srednee.png" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="../images/remove_img/srednee.png" alt="" />
          </li>
        </ul>
      </div>
      <div class="modal-two-setion-two">
        <div class="mod-two-date-blok">
          <h2 class="mod-two-primary-header">Daredevil<span>(2022)</span></h2>
          <div class="mod-two-date">
            <h3 class="mod-two-avtor">Chip Zdarsky</h3>

            <h3>December 07, 2022</h3>
          </div>
        </div>
        <p class="mod-two-text">
          In the most shocking issue of Chip Zdarsky and Marco Checchetto s
          landmark DAREDEVIL epic yet, Elektra finds herself at the center of an
          international incident that threatens to put her, Matt Murdock and
          everything they hold dear on a collision course with the Avengers -
          after which, things may never be the same!
        </p>
        <ul class="modal-two-info">
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Format</h3>
            <p>Comic</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Year released</h3>
            <p>1967</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Pages</h3>
            <p>28</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Price</h3>
            <p>$3.99</p>
          </li>
        </ul>
        <h2 class="mod-two-creator-header">Creator</h2>
        <div class="mod-two-creator">
          <img class="mod-two-img-creator" src="../images/remove_img/malenkoe.png" alt="" />
          <div>
            <h3 class="mod-two-creator-job-title">Writer</h3>
            <p>Chip Zdarsky</p>
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
            <p>функция делающая лишки</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>функция делающая лишки</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>функция делающая лишки</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>функция делающая лишки</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
    `;
}
