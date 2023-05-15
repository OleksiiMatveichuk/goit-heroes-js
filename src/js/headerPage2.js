import { api } from "./low-level/api"
import debounce from "lodash.debounce";

const searchInput = document.querySelector('.header-input');

console.log("Run header2.js")

window.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('searchQuery');
    const searchInput = document.querySelector('.header-input');
    searchInput.value = searchQuery || '';
});

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


// Go to new window
const form = document.querySelector('#search-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Получаем значение из поля ввода
    const searchQuery = searchInput.value.trim();
    // Формируем URL
    const url = `../page-2.html?searchQuery=${searchQuery}`;
    // Проверяем, что текущая страница не page-2.html
    if (window.location.href.indexOf('page-2.html') === -1) {
        // Открываем новое окно
        try {
            window.open(url);
        } catch (e) { console.log(e.message); }
    } else {
        // Если текущая страница уже page-2.html, просто обновляем значения в полях поиска
        const searchInputPage2 = document.querySelector('.header-input');
        searchInputPage2.value = searchQuery;
    }
    // Очищаем поле ввода
    // searchInput.value = '';
});
