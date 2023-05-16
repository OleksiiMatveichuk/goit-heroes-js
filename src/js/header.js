import { api } from "./low-level/api"
import debounce from "lodash.debounce";

const searchInput = document.querySelector('.header-input');

console.log("Run header.js")

searchInput.addEventListener('click', () => {
    // Устанавливаем пустое значение в поле ввода
    searchInput.select();
});

searchInput.addEventListener('input', debounce(inputHandler, 500));
async function inputHandler() {
    const query = this.value.trim();

    if (query.length < 2) {
        // Hide the results if the query is too short
        this.setAttribute('list', '');
        return;
    }
    const data = await api.getAllCharacters({ nameStartsWith: query });
    const results = data.results

    const dataList = document.createElement('datalist');
    dataList.id = 'search-results';

    results.forEach(result => {
        const option = document.createElement('option');
        option.value = result.name;
        dataList.appendChild(option);
    });

    const existingDataList = document.querySelector('#search-results');
    if (existingDataList) {
        existingDataList.replaceWith(dataList);
    } else {
        this.after(dataList);
    }
    this.setAttribute('list', 'search-results');
}

// ШУКАЮ ШИРИНУ КОНТЕЙНЕРА
const container = document.querySelector(".container")
let windowWidth = window.getComputedStyle(container).width;
let itemsOnPage = null;
// ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
// debugger
switch (windowWidth) {
    case '375px':
        itemsOnPage = 5;
        break;
    case '100%':
        itemsOnPage = 5;
        break;
    case '1440px':
        itemsOnPage = 16;
        break;

    default:
        itemsOnPage = 8;
        break;
}

window.addEventListener('load', async () => {
    if (window.location.pathname.includes('page-2.html')) {
        const savedValue = localStorage.getItem('searchValue');
        if (savedValue) {
            // Если значение сохранено, вставляем его в инпут
            const searchInput = document.querySelector('.header-input');
            searchInput.value = savedValue;
            const formStartWith = document.querySelector('#name')
            formStartWith.value = savedValue
        }
        const galleryList = document.querySelector('.gallery');
        galleryList.setAttribute("data-limits", itemsOnPage)
        galleryList.innerHTML = '';
        galleryList.innerHTML = await createGallery(savedValue || '');
    }
});

// Go to new window

const form = document.querySelector('#search-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let searchQuery = searchInput.value.trim();
    const url = `./page-2.html`;
    if ((window.location.href === window.location.origin + "/") || window.location.pathname.includes("index.html")) {
        localStorage.setItem('searchValue', searchQuery);
        window.location.href = url;
    } else if (window.location.pathname.includes("page-2.html")) {
        searchQuery = searchInput.value
        let name = document.querySelector(`[name="name"]`)
        name.value = searchInput.value
        const galleryList = document.querySelector('.gallery');

        galleryList.innerHTML = ''
        console.log("input", searchQuery)
        galleryList.innerHTML = await createGallery(searchQuery)
        localStorage.removeItem('searchValue');
    }
});

import { galleryItem, renderGallery } from "./get-gallery-list"
async function createGallery(searchQuery) {
    try {
        console.log("itemsOnPage=", itemsOnPage)
        const data = await api.getAllCharacters({ nameStartsWith: searchQuery, limit: itemsOnPage, });
        const results = data.results
        console.log(data)
        console.log(results)
        const galleryList = document.querySelector('.gallery');
        galleryList.setAttribute("data-total", data.total)
        galleryList.setAttribute("data-offset", data.offset)


        if (results.length === 0) {
            console.log("NOT FOUND!!!!")
            errorGallery();
            return
        }
        return renderGallery(results)
    } catch (e) {

        console.log(e)
    }

}

