//import { createModal1 } from './createModal1';
import { createModalOn } from './createModalOn';
import { api } from './low-level/api';

const listCharacters = [];
const ulList = document.querySelector('.random-list');

const img = document.querySelector('.random-img');

ulList.addEventListener('click', handleClickItem);
const random_bacground = document.querySelector('.random-bacground');

img.style.visible = false;

img.addEventListener('click', () => {
  createModalOn(character.data.id, character.data.name);
  //removeSetInterval();
});
let setIntervalId = null;
let timeId = null;

const character = {
  // id: null,
  // name: null,
  // description: null,
  // resourceURI: null,
};
function removeSetInterval() {
  clearInterval(setIntervalId);
  setIntervalId = null;
}
import { errorAPI } from './error-gallery';
async function getRandomData(params) {
  try {
    console.log('random data');
    const data = await api.getAllCharacters(params);
    if (!data) {
      console.log('bad data');

      ulList.innerHTML = errorAPI('Too Many Requests...');
    }
    listCharacters.push(data.results);
    return data;
  } catch (er) {
    console.log('random list', er);
  }
}

function newImg(value) {
  createNewCharacter(value);

  img.src = `${value.thumbnail.path}.${value.thumbnail.extension}`;

  random_bacground.style.backgroundImage = `url(${value.thumbnail.path}.${value.thumbnail.extension})`;
  random_bacground.style.backgroundSize = 'cover';
  random_bacground.style.backgroundPosition = 'center';
  random_bacground.style.backgroundRepeat = 'no-repeat';
  // img.src = `../images/remove_img/modal1-img.jpg`;
}

function handleClickItem(e) {
  if (e.target.tagName !== 'UL' && e.target.tagName !== 'DIV') {
    if (setIntervalId) {
      removeSetInterval();

      if (!timeId) {
        timeId = setTimeout(() => {
          //запускаем заново slider
          startSlider(0);

          clearTimeout(timeId);
          timeId = null;
        }, 3500);
      }
    }

    let li = document.querySelectorAll('.random-item');
    const id_character = e.target.closest('li').id;

    const result = listCharacters.find(
      character => character[0].id === Number(id_character)
    );

    newImg(result[0]);

    let i = 0;
    li.forEach(item => {
      let activeLink = document.querySelector('.random-item.active');
      const p = item.querySelector('.random-value-text.active');

      if (activeLink) {
        activeLink.classList.remove('active');
        p?.classList.remove('active');
      }
      let active_p = document.querySelector('.random-value-text.active');
      if (active_p) {
        active_p.classList.remove('active');
        active_p.style.color = '';
      }

      e.target.closest('li').classList.add('active');
      let newActive = document.querySelector('.random-item.active');

      const p_new_active = newActive.querySelector('.random-value-text');
      p_new_active.style.color = 'rgb(52, 56, 127)';

      p_new_active.classList.add('active');
    });
  }
}
function active_Slider(value) {
  let li = document.querySelectorAll('.random-item');
  let activeLink = document.querySelector('.random-item.active');
  if (activeLink) {
    activeLink.classList.remove('active');
  }
  let active_p = document.querySelector('.random-value-text.active');
  if (active_p) {
    active_p.classList.remove('active');
    active_p.style.color = '';
  }
  li[value]?.classList.add('active');
  //=================получаем id і посилаємо шукати наш обжект
  getCharacter(Number(li[value].dataset.id));

  let newActive = document.querySelector('.random-item.active');
  const p_new_active = newActive.querySelector('.random-value-text');
  p_new_active.style.color = 'rgb(52, 56, 127)';

  p_new_active.classList.add('active');

  //перегрузити треба фото
}

function getCharacter(id) {
  const result = listCharacters.filter(item => {
    return item[0].id === id;
    //return item.results[0].id === id;
  });
  newImg(result[0][0]);
}
export function startSlider(vel) {
  let i = vel;

  if (setIntervalId > 2) {
    removeSetInterval();
  }
  setIntervalId = setInterval(() => {
    active_Slider(i);

    i += 1;
    if (i === 5) {
      i = 0;
    }
  }, 3500);
}

function createNewCharacter(data) {
  // const { id, name, description, resourceURI } = data;
  character.data = { ...data };

  // character.id = id;
  // character.name = name;
  // character.description = description;
  // character.resourceURI = resourceURI;
}

function createLi(value) {
  //<img class="gallery-image" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.description}" />
  return `
    <li class='random-item' id=${value[0].id} data-id=${value[0].id} >

       <h3 class='random-value-name hero-name' data-name>${value[0].name}</h3>
       <p class='random-value-text' data-description>${value[0].description}</p>
    </li>
    `;
}
//
function gerRandomCharacters(data) {
  return data.map(character => createLi(character.results)).join('');
}

function startMain() {
  const promiseArray = [];
  for (let i = 0; i < 5; i += 1) {
    const res = new Promise(resolve => {
      const result = getRandomData({
        limit: 1,
        offset: Math.round(Math.random() * 1561),
      });

      promiseArray.push(result);
    });
  }

  Promise.all(promiseArray)
    .then(data => {
      createMarkup(data);
    })
    .catch(er => console.log('ERR', er));
}

function createMarkup(data) {
  createNewCharacter(data[0].results[0]);
  const markup = gerRandomCharacters(data);

  ulList.innerHTML = markup;
  newImg(listCharacters[0][0]);
  startSlider(0);
}
startMain();
