import { api } from './low-level/api';

export async function createModalTwo(value) {
  // const id = 37421;
  const id = value;

  const API = await api.getComicById({ comicId: id });

  const itemComics = await createLiComics(API);

  const arrCreators = await api.getCreatorsByComicsId({ comicId: id });

  const itemCreators = await createLiCreators(arrCreators, API);

  const arrCharacters = await api.getCharactersByComicsId({ comicId: id });
  const itemCharacters = await createLiCharacters(arrCharacters);

  const modal = await modalTwo(API, itemCharacters, itemCreators, itemComics);
  const body = document.body;

  body.insertAdjacentHTML('afterbegin', modal);

  const closeModal = document.querySelector('.bacground-mod-two');
  const closeBtn = document.querySelector('.mod-two-buttom');
  closeModal.addEventListener('click', closeModal_Window);
  closeBtn.addEventListener('click', closeModal_Window);
}

async function modalTwo(arr, characters, creators, comics) {
  return `
  <div class="bacground-mod-two">
    <div class="modal-two">
      <button class="mod-two-buttom" type="button" data-modal-close>
        <svg class='mod-two-swg-close' width="14" height="14">
          <use class="mod-two-close" href="./images/symbol-defs.svg#icon-close"></use>
        </svg>
      </button>
      <div class="mod-two-first-gallery">
        <img class="mod-two-first-img" src="${arr[0].thumbnail.path}.${
    arr[0].thumbnail.extension
  }" alt="" />
        <ul class="mod-two-gallery">
          ${comics}
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
        <ul class="mod-two-gallery-creators">
        ${creators}
        </ul>
        <h2 class="mod-two-charaters-header">Characters</h2>
        <ul class="mod-two-charaters-gallery">
        ${characters}
        </ul>
      </div>
    </div>
    </div>
    `;
}

function closeModal_Window(e) {
  if (
    e.target.classList.value === 'bacground-mod-two' ||
    e.target.classList.value === 'mod-two-buttom' ||
    e.target.tagName === 'svg'
  ) {
    const modal = document.querySelector('.bacground-mod-two');

    document.body.style.overflow = '';
    //startSlider(0);

    modal?.remove();
  }
}

async function createLiCharacters(arr) {
  if (!arr.length) {
    return `<li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="./images/desktop/incognito.jpg"
              alt=""
            />
            <p>Hero</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="./images/desktop/incognito.jpg"
              alt=""
            />
            <p>Antagonist</p>
          </li>`;
  }

  const lishka = await arr.map(
    el =>
      `<li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="${el.thumbnail.path}.${el.thumbnail.extension}"
              alt=""
            />
            <p>${el.name}</p>
          </li>`
  );
  return await lishka.join('');
}

async function createLiCreators(arr, comics) {
  if (!arr.length) {
    return `<li class="mod-two-creator">
            <img class="mod-two-img-creator" src="./images/desktop/incognito.jpg" alt="" />
            <div>
              <h3 class="mod-two-creator-job-title">Writer</h3>
              <p>Creator name</p>
            </div>
          </li>`;
  }

  const lishka = await arr.map(
    (el, i) =>
      `<li class="mod-two-creator">
            <img class="mod-two-img-creator" src="${el.thumbnail.path}.${el.thumbnail.extension}" alt="" />
            <div>
              <h3 class="mod-two-creator-job-title">${comics[0].creators.items[i].role}</h3>
              <p>${el.fullName}</p>
            </div>
          </li>`
  );
  return await lishka.join('');
}

async function createLiComics(arr) {
  const comics = arr[0].images;

  if (!comics.length) {
    return `<li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${arr[0].thumbnail.path}.${arr[0].thumbnail.extension}" alt="" />
          </li>`;
  }

  const lishka = comics.map(
    el =>
      `<li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${el.path}.${el.extension}" alt="" />
          </li>
    `
  );
  return await lishka.join('');
}
