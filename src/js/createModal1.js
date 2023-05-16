import { startSlider } from './random-list';
import { api } from './low-level/api';

export async function createModal1(data) {
  const body = document.body;
  document.body.style.overflow = 'hidden';
  const { id, name, description, modified } = data;

  const tempData = await getCharacterDataId(id);
  //======================

  const comicsArray = await getComicsArray(tempData);

  console.log('comicsArray', comicsArray);
  //=================
  const markups = await createMarcup(tempData);

  const result = markups.join('');

  console.log('RESALT', result);

  const modalForm = modal1(data);
  body.insertAdjacentHTML('afterbegin', modalForm);

  const markup = reternCharacterInfo(name, description, modified);

  const black_widow = document.querySelector('.black-widow');
  black_widow.insertAdjacentHTML('afterbegin', markup);

  const closeModalForm = document.querySelector('.bacground-modal');
  closeModalForm.addEventListener('click', closeModal);

  const close_btn = document.querySelector('.close-modal-btn');
  close_btn.addEventListener('click', closeModal);

  const black_widow_list = document.querySelector('.black-widow-list');
  black_widow_list.insertAdjacentHTML('afterbegin', result);
}
//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
async function getCharacterDataId(id) {
  const data = await api.getCharactersById({ characterId: id });
  return data;
}

async function getComic(data) {
  var b = data.resourceURI.split('/');
  const idComic = Number(b[b.length - 1]);
  const oneComic = await api.getComicById({ comicId: idComic });
  console.log('oneComic', oneComic);
  return oneComic;
}

async function getComicsArray(data) {
  const { items } = data[0].comics;
  const res = items.filter((item, i) => {
    if (i < 3) {
      return item;
    }
  });

  const dat = res.map(async data => {
    console.log('FFFFFFFFFFFFFFFFF', await getComic(data));
    return await getComic(data);
  });
  console.log('DATDATDAT_________', dat);
  return dat;
}

async function createMarcup(data) {
  console.log('data data ', data);
  const { items } = data[0].comics;
  const markup = [];
  items.forEach(async (item, i) => {
    if (i < 3) {
      // console.log(item);
      let mar = await createComics(item);
      console.log('MAR', mar);
      markup.push(mar);
    }
  });
  console.log('MARKUP+', markup);
  return markup;
}

//`url(${value.thumbnail.path}.${value.thumbnail.extension})`;
// function toPaintCard(mapkup) {
//   console.log('MARK++++++++++', mapkup.join(''));
//   const black_widow_list = document.querySelector('.black-widow-list');
//   console.log(black_widow_list);
//   black_widow_list.insertAdjacentHTML('afterbegin', mapkup.join(''));
// }

function reternCharacterInfo(name, description, modified) {
  return `
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">${name}</h4>
    <p class="black-widow-info-data">${modified}</p>
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
  console.log('thumbnail', thumbnail);
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

function modal1(data) {
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
          src="${data.thumbnail.path}.${data.thumbnail.extension}"
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

// // ======================
//  <li class="black-widow-list-item">
//       <div class="black-widow-card">
//         <img
//           class="img-list-item-card"
//           src="./images/remove_img/card2.jpg"
//           alt="img"
//           width="263"
//         />
//         <div class="black-widow-card-footer">
//           <h4 class="black-widow-card-text">Black Widow (2020)</h4>
//           <p class="black-widow-card-description">Kelly Thompson</p>
//         </div>
//       </div>
//     </li>
//     <li class="black-widow-list-item">
//       <div class="black-widow-card">
//         <img
//           class="img-list-item-card"
//           src="./images/remove_img/card3.jpg"
//           alt="img"
//           width="263"
//         />
//         <div class="black-widow-card-footer">
//           <h4 class="black-widow-card-text">Black Widow (2020)</h4>
//           <p class="black-widow-card-description">Kelly Thompson</p>
//         </div>
//       </div>
//     </li>
