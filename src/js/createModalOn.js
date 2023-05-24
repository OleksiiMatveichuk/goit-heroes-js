import { api } from './low-level/api';
import { createModalTwo } from './modal-two';

export async function createModalOn(id, value) {
  const body = document.body;
  document.body.style.overflow = 'hidden';

  const data = await api.getCharactersById({ characterId: id });

  // Mary Jane Watson
  //хочемо отримати різні фото нашого героя

  const fotoHeroy = await api.getAllCharacters({
    nameStartsWith: value,
    limit: 3,
  });
  const resultsFoto = fotoHeroy.results;

  const markupFotos = await createMarcupFotoHeroy(resultsFoto);

  const { name, description, modified } = data[0];

  const { path, extension } = data[0].thumbnail;

  const modal = await createModal(path, extension);

  body.insertAdjacentHTML('afterbegin', modal);

  const comicsArray = data[0].comics.items.filter((item, index, array) => {
    if (index < 3) {
      return item;
    }
  });

  const comic_array = await comicsArray.map(async item => {
    const b = item.resourceURI.split('/');
    const idComic = Number(b[b.length - 1]);
    const comic = await api.getComicById({ comicId: idComic });

    return comic;
    //const data
  });

  const resultComics = await Promise.all(comic_array).then(data => data);
  //============================

  const markup = await createMarkupComics(resultComics);

  const markupHeader = await createHeaderCard(name, description, modified);
  //markupHeader +

  const innetHtml = markup;

  const black_widow_list = document.querySelector('.black-widow-list');

  black_widow_list.insertAdjacentHTML('beforebegin', markupHeader);
  black_widow_list.insertAdjacentHTML('afterbegin', innetHtml);

  const fotosArray = document.querySelector('.img-list');
  fotosArray.insertAdjacentHTML('afterbegin', markupFotos);

  body.addEventListener('click', handleClickModal);
  // closeButtonModal = document.querySelector('close-modal-btn');
  // closeButtonModal.addEventListener('click', handleClickModal);

  async function createHeaderCard(name, description, modified) {
    const date = getFormatDate(modified);

    return `
   
         <div class="black-widow-info">
               <h4 class="black-widow-info-text">${name}</h4>
               <p class="black-widow-info-data">${date}</p>
            </div>
          <p class="black-widow-content"> ${description}</p>
           <h4 class="black-widow-list-text">List of comics</h4>
          
          `;
  }
  async function createMarcupFotoHeroy(fotos) {
    return fotos
      .map(foto => {
        const { path, extension } = foto.thumbnail;
        return `<li>
            <img
              class="img-list-item"
              src="${path}.${extension}"
              alt="img"
              width="80"
              height="80"
            />
          </li>`;
      })
      .join('');
  }

  function handleClickModal(e) {
    console.log('e.target===', e.target);
    console.log('e.currenttarget===', e.currentTarget);

    if (
      e.target.tagName === 'use' ||
      e.target.tagName === 'use' ||
      e.target.className === 'close-modal-btn' ||
      e.target.className === 'close-use' ||
      e.target.className === 'close-modal'
    ) {
      const modal1 = document.querySelectorAll('.bacground-modal');

      modal1.forEach(item => item.remove());
      document.body.style.overflow = '';
      // modal1?.remove();
    } else if (
      e.target.className === 'img-list-item-card' ||
      e.target.className === 'black-widow-card-text' ||
      e.target.className === 'black-widow-card-description' ||
      e.target.className === 'black-widow-card-footer'
    ) {
      createModalTwo(Number(e.target.closest('li').dataset.id));
    }
  }

  async function createMarkupComics(comics) {
    return comics
      .map(comic => {
        const { id, title } = comic[0];
        const { path, extension } = comic[0].thumbnail;
        //const { name } = comic[0].creators.items[0].name;

        return `
        <li class="black-widow-list-item" data-id=${id}>
         <a class="black-widow-handle">
            <div class="black-widow-card">
              <img  width ='263'height= '263'
                class="img-list-item-card"
                src="${path}.${extension}"
              />
              <div class="black-widow-card-footer">
                <h4 class="black-widow-card-text">${title}</h4>
                <p class="black-widow-card-description">${comic[0].creators.items[0]?.name}</p>
              </div>
            </div></a>
          </li>
         `;
      })
      .join('');
  }

  function getFormatDate(dat) {
    let d = new Date(dat);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${mo} ${da}, ${ye}`;
  }

  //<img src='./images/close.svg' class="close-modal" width="10" height="10"  ></img>

  async function createModal(path, extension) {
    return `
   <div class="bacground-modal">
  <section class="modal-window">
    <div class="container-modal">
     

   <div class='close-modal-btn'>
     <svg class="close-modal" width="10" height="10" fill="white">
            <use class='close-use' href="./images/symbol-defs.svg#icon-close-mod"></use>
          </svg>

    </div>
     
  
 
      
<div class="modal1-content">
      <div class="img-info">
        <img
          class="img-modal"
          src="${path}.${extension}"
          alt="amg"
          width="295"
           height= "387";
        />

        <ul class="img-list list">
          
        </ul>
      </div>

     <div class="black-widow">

  <ul class="black-widow-list"></ul>
  
</div> 

</div>
    </div>
  </section>
</div>
    
    `;
  }

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      const modal1 = document.querySelectorAll('.bacground-modal');

      modal1.forEach(item => {
        item.remove();
        document.body.style.overflow = '';
      });
    }
  });
}
