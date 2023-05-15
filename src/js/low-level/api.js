import axios from 'axios';

import { key } from './keys.js';
import md5Hash from './md5Hash.js';

const PRIVATE_KEY = key.privatekey;
const PUBLIC_KEY = key.publickey;
const API_URL = 'https://gateway.marvel.com/v1/public';
const timeStamp = 1;

const axiosInst = axios.create({
  baseURL: API_URL,
  params: {
    apikey: PUBLIC_KEY,
    hash: md5Hash({ timeStamp, PRIVATE_KEY, PUBLIC_KEY }),
    ts: timeStamp,
  },
});

export const api = {
  // ********************************
  // https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
  // ************************************

  getCharacters: async ({
    nameStartsWith = '', // начинается с
    offset = 0, // смещение - допустим, всего 26 - указываем 3 - первые три откинуться и венется 16 начиная с 4-го - ДЛЯ ПАГИНАЦИИ
    limit = 16, // сколько на странице 16 по-умолчанию - десктоп, 8 - планшет, 4 - мобила - должно вычисляться по ширине вьюпорта и в зависимости от него устанавливаться перед вызовом
    comics = 0,
    orderBy = '',
    modifiedSince = '', //'01-01-2011' - выборка по дате
  }) => {
    try {
      const res = await axiosInst.get('/characters', {
        params: {
          ...(nameStartsWith && { nameStartsWith }),
          ...(offset && { offset }),
          ...(limit && { limit }),
          ...(comics && { comics }),
          ...(orderBy && { orderBy }),
          ...(modifiedSince && { modifiedSince }),
        },
      });
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getAllCharacters: async ({
    nameStartsWith = '',
    offset = 0,
    limit = 16,
    comics = 0,
    orderBy = '',
    modifiedSince = '',
  }) => {
    try {
      const res = await axiosInst.get('/characters', {
        params: {
          ...(nameStartsWith && { nameStartsWith }),
          ...(offset && { offset }),
          ...(limit && { limit }),
          ...(comics && { comics }),
          ...(orderBy && { orderBy }),
          ...(modifiedSince && { modifiedSince }),
        },
      });
      const data = res.data.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // ********************************
  // https://developer.marvel.com/docs#!/public/getComicsCollection_get_6
  // ************************************
  getComics: async ({
    format = '',
    title = '',
    titleStartsWith = '',
    startYear = 0,
    limit = 16,
    offset = 0,
    orderBy = '',
    dateDescriptor = '',
  }) => {
    try {
      const res = await axiosInst.get('/comics', {
        params: {
          ...(titleStartsWith && { titleStartsWith }),
          ...(format && { format }),
          ...(title && { title }),
          ...(offset && { offset }),
          ...(limit && { limit }),
          ...(startYear && { startYear }),
          ...(orderBy && { orderBy }),
          ...(dateDescriptor && { dateDescriptor }),
        },
      });
      const data = res.data.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // ..ById - использовать для детализации при открытии модалок - Id должна сохраняться в аттрибуте data-id= на странице с галереями

  getCharactersById: async ({ characterId }) => {
    try {
      const res = await axiosInst.get(`/characters/${characterId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getComicById: async ({ comicId }) => {
    try {
      const res = await axiosInst.get(`/comics/${comicId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getSeriesById: async ({ seriesId }) => {
    try {
      const res = await axiosInst.get(`/series/${seriesId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getCharactersByComicsId: async ({ comicId }) => {
    try {
      const res = await axiosInst.get(`/comics/${comicId}/characters`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getCreatorById: async ({ creatorId }) => {
    try {
      const res = await axiosInst.get(`/creators/${creatorId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getStoriesById: async ({ storyId }) => {
    try {
      const res = await axiosInst.get(`/stories/${storyId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

// How it works

// *****************
// import { api } from "./js/low-level/api";

// const btn = document.querySelector("#btnGet")
// const btnAll = document.querySelector("#btnGetAll")

// btn.addEventListener("click", handleClick)
// btnAll.addEventListener("click", handleClickAll)

// console.log("Ready to start")

// async function handleClick() {
//     const array = await api.getCharacters({
//         limit: 10,
//         offset: 2,
//         nameStartsWith: 'Bla',
//     });
//     console.log(array)
// }

// async function handleClickAll() {
//     const array = await api.getAllCharacters({
//         // limit: 4,
//         // offset: 0,
//         // nameStartsWith: 'Bla',
//         modifiedSince: '01-01-2011',
//     });
//     console.log(array)
// }
// вызов без параметров - возврат:
// count:16 колл-во
// limit:16 ограничение на возврат
// offset:0 смещение - использовать в пагинации
// results:(16) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] - массив с    значениями
// total:1562 - всего записей - использовать в пагинации

// *****************
// HOW IT WORKS

// import { api } from "./low-lewel/api"
// const btn = document.querySelector("#getAll")
// btn.addEventListener("click", handleClick)

// async function handleClick() {
//     const data = await api.getAllCharacters({
//         nameStartsWith: '',
//         offset: 0,
//         limit: 16,
//         modifiedSince: '01-01-2011',

//     })
//     console.log(data)
//     console.log(data.results[2].name)
//     console.log(data.results[2].id)
// }
