import './src/css/pagination.css';
import { api } from './low-level/api';

// let page = 1;
// const limit = 4;

// async function getRandomData(params) {
//   const data = await api.getAllCharacters(params);

//   listCharacters.push(data.results);
//   return data;
// }

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
};

// =======================================================================================
const refs = {
  paginationList: document.querySelector('.paginList'),
};

refs.paginationList.addEventListener('click', requestHandler);

function requestHandler(params) {}

function createPaginationList(total, limit, offset) {
  paginationList.innerHTML = '';
  if (total < 1) {
    return;
  }
  const arr = [];
  const pages = Math.ceil(total / limit);
  const activePage = Math.ceil(offset / limit) + 1;
  for (let i = activePage; i <= pages; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    arr.push(li);
  }
  paginationList.append(...arr);
}

function handlePagination(target) {
  if ((target.localName = 'li')) {
    const offset = target.textContent * limit;
    getAllCharacters(offset);
  }
}
