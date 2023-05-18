import { api } from './low-level/api';
import { createModalTwo } from './modal-two';

export async function createModalOn(id) {
  const body = document.body;

  const data = await api.getCharactersById({ characterId: id });

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

  const markup = await createMarkupComics(resultComics);

  const markupHeader = await createHeaderCard(name, description, modified);
  //markupHeader +

  const innetHtml = markup;

  const black_widow_list = document.querySelector('.black-widow-list');

  black_widow_list.insertAdjacentHTML('beforebegin', markupHeader);
  black_widow_list.insertAdjacentHTML('afterbegin', innetHtml);

  body.addEventListener('click', handleClickModal);

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

  function handleClickModal(e) {
    if (
      e.target.className === 'bacground-modal' ||
      e.target.className === 'close-modal-btn'
    ) {
      const modal1 = document.querySelector('.bacground-modal');
      document.body.style.overflow = '';
      modal1?.remove();
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
         <a href="#" class="black-widow-handle">
            <div class="black-widow-card">
              <img  width ='263'height= '263'
                class="img-list-item-card"
                src="${path}.${extension}"
              />
              <div class="black-widow-card-footer">
                <h4 class="black-widow-card-text">${title}</h4>
                <p class="black-widow-card-description">${comic[0].creators.items[0].name}</p>
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

  async function createModal(path, extension) {
    return `
   <div class="bacground-modal">
  <section class="modal-window">
    <div class="container-modal">
    <a class="close">

    <img src='./images/symbol-defs.svg#icon-close' class="close-modal-btn" width="20" height="20"  >
    
    </a>
      
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

  <ul class="black-widow-list"></ul>
  
</div> 

</div>
    </div>
  </section>
</div>
    
    `;
  }
}
