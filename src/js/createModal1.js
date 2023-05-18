import { startSlider } from './random-list';
import { api } from './low-level/api';
import { createModalTwo } from './modal-two';

export async function createModal1(d, value) {
  let data;
  if (value === 2) {
    // console.log('galari');
    // result = await api.getCharactersById({ characterId: d });
    // console.log('DATA+++++++++++', result);
    // data = result;
    // const tempData = await api.getCharactersById({ characterId: d });
    // console.log('tempData', tempData);
    // const comicsArray = await getComicsArray(tempData);
    // const marKup = await Promise.all(comicsArray).then(async data => {
    //   const marcup = await createNewMarcup(data);
    //   return marcup;
    // });
    // const { path, extension, name, description, modified } = tempData;
    // const markup = reternCharacterInfo(name, description, modified);
    // console.log(markup);
    // const body = document.body;
    // document.body.style.overflow = 'hidden';
    // const modalForm = modal1(path, extension);
    // body.insertAdjacentHTML('afterbegin', modalForm);
    // const black_widow = document.querySelector('.black-widow');
    // black_widow.insertAdjacentHTML('afterbegin', markup);
    // const closeModalForm = document.querySelector('.bacground-modal');
    // closeModalForm.addEventListener('click', closeModal);
    // const close_btn = document.querySelector('.close-modal-btn');
    // close_btn.addEventListener('click', closeModal);
    // const black_widow_list = document.querySelector('.black-widow-list');
    // black_widow_list.insertAdjacentHTML('afterbegin', marKup);
    // const modal_window = document.querySelector('.modal-window');
    // modal_window.addEventListener('click', clickModalImg);
    // return;
  } else {
    data = d;
  }
  const body = document.body;
  document.body.style.overflow = 'hidden';

  const { id, name, description, modified } = data;
  const { path, extension } = data.thumbnail;

  console.log('path=', `${path}.${extension}`);

  //=========================================
  const tempData = await getCharacterDataId(id);

  const comicsArray = await getComicsArray(tempData);

  const marKup = await Promise.all(comicsArray).then(data => {
    const marcup = createNewMarcup(data);

    return marcup;
  });

  const modalForm = modal1(path, extension);

  body.insertAdjacentHTML('afterbegin', modalForm);

  const markup = reternCharacterInfo(name, description, modified);

  const black_widow = document.querySelector('.black-widow');
  black_widow.insertAdjacentHTML('afterbegin', markup);

  const closeModalForm = document.querySelector('.bacground-modal');
  closeModalForm.addEventListener('click', closeModal);

  const close_btn = document.querySelector('.close-modal-btn');
  close_btn.addEventListener('click', closeModal);

  const black_widow_list = document.querySelector('.black-widow-list');
  black_widow_list.insertAdjacentHTML('afterbegin', marKup);

  const modal_window = document.querySelector('.modal-window');
  modal_window.addEventListener('click', clickModalImg);
}

function clickModalImg(e) {
  if (e.target.classList.value !== 'img-list-item-card') {
    return;
  }
  if (e.target.tagName === 'use') {
    closeModal();
  }
  // console.log(e.target.closest('li').dataset.id);
  createModalTwo(Number(e.target.closest('li').dataset.id));
}

async function getCharacterDataId(id) {
  const data = await api.getCharactersById({ characterId: id });
  return data;
}
function getFormatDate(data) {
  let d = new Date(data);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  return `${mo} ${da}, ${ye}`;
}

// async function createNewMarcup(data) {
//   const markup = await data
//     .map(item => {
//       const { id, thumbnail, title, creators } = item;
//       const name = creators.items[0]?.name
//         ? creators.items[0].name
//         : 'Wiktor Djoba';
//       return `
//    <li class="black-widow-list-item" data-id=${id}>
//    <a href="#" class="black-widow-handle">
//       <div class="black-widow-card">
//         <img  width ='263'height= '263'
//           class="img-list-item-card"
//           src="${thumbnail.path}.${thumbnail.extension}"
//         />
//         <div class="black-widow-card-footer">
//           <h4 class="black-widow-card-text">${title}</h4>
//           <p class="black-widow-card-description">${name}</p>
//         </div>
//       </div></a>
//     </li>
//   `;
//     })
//     .join('');
//   return markup;
// }
//==================================
function createNewMarcup(data) {
  const markup = data
    .map(item => {
      const { id, thumbnail, title, creators } = item;
      const name = creators.items[0]?.name
        ? creators.items[0].name
        : 'Wiktor Djoba';
      return `
   <li class="black-widow-list-item" data-id=${id}>
   <a href="#" class="black-widow-handle">
      <div class="black-widow-card">
        <img  width ='263'height= '263'
          class="img-list-item-card"
          src="${thumbnail.path}.${thumbnail.extension}"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">${title}</h4>
          <p class="black-widow-card-description">${name}</p>
        </div>
      </div></a>
    </li>
  `;
    })
    .join('');
  return markup;
}

async function getComic(data) {
  var b = data.resourceURI.split('/');
  const idComic = Number(b[b.length - 1]);
  const oneComic = await api.getComicById({ comicId: idComic });

  return oneComic[0];
}
// const dataArray = [];

function addComiks(data, res) {
  return data.push(res);
}
async function getComicsArray(data) {
  const { items } = data[0].comics;
  const res = items.filter((item, i) => {
    if (i < 3) {
      return item;
    }
  });

  const dat = res.map(async data => {
    const date = await getComic(data);

    return date;
  });

  return dat;
}

function reternCharacterInfo(name, description, modified) {
  console.log('modified', modified);
  const date = getFormatDate(modified);
  return `
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">${name}</h4>
    <p class="black-widow-info-data">${date}</p>
  </div>
   <p class="black-widow-content">
   ${description}
  </p>
  `;
}

async function createComics(data) {
  var b = data.resourceURI.split('/');
  const idComic = Number(b[b.length - 1]);

  const comic = await api.getComicById({ comicId: idComic });

  // console.log('COM-RETERN=', comic);
  const { id, thumbnail, title } = comic[0];
  //console.log('thumbnail', thumbnail);
  return `
   <li class="black-widow-list-item" data-id=${id}>
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="${thumbnail.path}/${thumbnail.extension}"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">${title}</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
  `;
}
// ;

function modal1(path, extension) {
  console.log('path', path, ' ', extension);
  return `
   <div class="bacground-modal">
  <section class="modal-window">
    <div class="container-modal">
      <svg class="close-modal-btn" width="20" height="20">
        <use href="./images/symbol-defs.svg#icon-close"></use>
      </svg>
<div class="modal1-content">
      <div class="img-info">
        <img
          class="img-modal"
          src="${path}.${extension}"
          alt="amg"
          width="295"
           height= "387";
        />

        <ul class="img-list">
          <li>
            <img
              class="img-list-item"
              src="./images/remove_img/modal1.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="./images/remove_img/modal2.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="./images/remove_img/modal3.jpg"
              alt="img"
              width="80"
            />
          </li>
        </ul>
      </div>

     <div class="black-widow">


 
  <h4 class="black-widow-list-text">List of comics</h4>

  <ul class="black-widow-list">
   
   
  </ul>
</div> 

</div>
    </div>
  </section>
</div>
    
    `;
}

function closeModal(e) {
  if (
    e.target.classList.value === 'bacground-modal' ||
    e.target.classList.value === 'close-modal-btn'
  ) {
    const modal1 = document.querySelector('.bacground-modal');
    document.body.style.overflow = '';
    startSlider(0);
    modal1?.remove();
  }
}
