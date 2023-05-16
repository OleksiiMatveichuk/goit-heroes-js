// import { createModal1 } from './createModal1';
// import { api } from './low-level/api';

// const listCharacters = [];
// const ulList = document.querySelector('.random-list');
// const clickBtn = document.querySelector('.allCharactersBtn');
// clickBtn.addEventListener('click', removeSetInterval);
// const img = document.querySelector('.random-img');
// const form = document.querySelector('.form-random');
// //form.addEventListener('submit', createModal1);
// form.addEventListener('click', handleClickForm);
// ulList.addEventListener('click', handleClickItem);
// const random_bacground = document.querySelector('.random-bacground');

// //console.log(random_bacground);
// //const main = document.getElementsByName('main');
// // const loading = document.querySelector('.loading');
// // loading.style.display = 'none';
// img.style.visible = false;

// img.addEventListener('click', () => {
//   createModal1();

//   removeSetInterval();
// });
// let setIntervalId = null;
// let timeId = null;

// const character = {
//   id: null,
//   name: null,
//   description: null,
//   resourceURI: null,
// };
// function removeSetInterval() {
//   clearInterval(setIntervalId);
//   setIntervalId = null;
// }

// function handleClickForm(e) {
//   //console.log(e.target);
// }
// async function getRandomData(params) {
//   const data = await api.getAllCharacters(params);

//   listCharacters.push(data.results);
//   return data;
// }

// function newImg(value) {
//   // console.log('value==', value);
//   img.src = `${value.thumbnail.path}.${value.thumbnail.extension}`;
//   //  background-size: cover;
//   //     background-position: center;
//   //     background-repeat: no-repeat

//   random_bacground.style.backgroundImage = `url(${value.thumbnail.path}.${value.thumbnail.extension})`;
//   random_bacground.style.backgroundSize = 'cover';
//   random_bacground.style.backgroundPosition = 'center';
//   random_bacground.style.backgroundRepeat = 'no-repeat';
//   // img.src = `../images/remove_img/modal1-img.jpg`;
// }

// function handleClickItem(e) {
//   if (setIntervalId) {
//     removeSetInterval();

//     if (!timeId) {
//       timeId = setTimeout(() => {
//         //запускаем заново slider
//         createSlider();

//         clearTimeout(timeId);
//         timeId = null;
//       }, 3500);
//     }
//   }
//   //console.log(e.target);
//   if (e.target.tagName !== 'UL') {
//     let li = document.querySelectorAll('.random-item');
//     const id_character = e.target.closest('li').id;

//     const result = listCharacters.find(
//       character => character[0].id === Number(id_character)
//     );

//     createNewCharacter(result[0]);

//     newImg(result[0]);

//     let i = 0;
//     li.forEach(item => {
//       let activeLink = document.querySelector('.random-item.active');
//       const p = item.querySelector('.random-value-text.active');
//       //console.log('li', i, '  p ', p);

//       if (activeLink) {
//         activeLink.classList.remove('active');
//         p?.classList.remove('active');
//       }
//       let active_p = document.querySelector('.random-value-text.active');
//       if (active_p) {
//         //console.log('active==', active_p);
//         active_p.classList.remove('active');
//         active_p.style.color = '';
//       }

//       e.target.closest('li').classList.add('active');
//       let newActive = document.querySelector('.random-item.active');
//       //console.log(';newActive', newActive);
//       const p_new_active = newActive.querySelector('.random-value-text');
//       p_new_active.style.color = 'rgb(52, 56, 127)';
//       //console.log('p_new_active', p_new_active.style.color);

//       p_new_active.classList.add('active');
//     });
//   }
// }
// function activeSlider(value) {
//   let li = document.querySelectorAll('.random-item');
//   let activeLink = document.querySelector('.random-item.active');
//   if (activeLink) {
//     activeLink.classList.remove('active');
//   }
//   let active_p = document.querySelector('.random-value-text.active');
//   if (active_p) {
//     //console.log('active==', active_p);
//     active_p.classList.remove('active');
//     active_p.style.color = '';
//   }
//   li[value].classList.add('active');

//   let newActive = document.querySelector('.random-item.active');
//   const p_new_active = newActive.querySelector('.random-value-text');
//   p_new_active.style.color = 'rgb(52, 56, 127)';
//   //console.log('p_new_active', p_new_active.style.color);

//   p_new_active.classList.add('active');
//   // console.log('qqqq', listCharacters[value][0]);
//   newImg(listCharacters[value][0]);
//   //перегрузити треба фото
// }

// export function createSlider() {
//   let i = 0;

//   if (setIntervalId > 2) {
//     removeSetInterval();
//   }
//   setIntervalId = setInterval(() => {
//     activeSlider(i);
//     i += 1;
//     if (i === 5) {
//       i = 0;
//     }
//   }, 3500);
// }

// function createNewCharacter(value) {
//   const { id, name, description, resourceURI } = value;
//   character.id = id;
//   character.name = name;
//   character.description = description;
//   character.resourceURI = resourceURI;
//   // console.log('character', character);
//   // console.log('listCharacters', listCharacters);
// }

// function createLi(value) {
//   //<img class="gallery-image" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.description}" />
//   return `
//     <li class='random-item' id=${value[0].id} data-id=${value[0].id} >

//        <h3 class='random-value-name hero-name' data-name>${value[0].name}</h3>
//        <p class='random-value-text' data-description>${value[0].description}</p>
//     </li>
//     `;
// }
// //
// function gerRandomCharacters(data) {
//   // console.log('DATA', data);
//   return data.map(character => createLi(character.results)).join('');
// }

// async function startMain() {
//   const promiseArray = [];
//   for (let i = 0; i < 5; i += 1) {
//     const res = new Promise(resolve => {
//       const result = getRandomData({
//         limit: 1,
//         offset: Math.round(Math.random() * 1561),
//       });
//       // console.log('result', result);
//       promiseArray.push(result);
//     });
//   }
//   // console.log('promiseArray', promiseArray);
//   Promise.all(promiseArray)
//     .then(data => {
//       // console.log('XXX', data);
//       createMarkup(data);
//     })
//     .catch(er => console.log('ERR', er));
// }

// function createMarkup(data) {
//   //console.log('tytData', data[0].results[0]);
//   createNewCharacter(data[0].results[0]);
//   const markup = gerRandomCharacters(data);
//   // console.log('markup', markup);
//   ulList.innerHTML = markup;
//   newImg(listCharacters[0][0]);
//   createSlider();
// }
// startMain();
