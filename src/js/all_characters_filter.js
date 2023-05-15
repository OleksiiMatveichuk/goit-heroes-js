const form = document.querySelector(".form")
let comic = document.querySelector(`[name="comic"]`)
let name = document.querySelector(`[name="name"]`)
let order = document.querySelector(`[name="order"]`)
let date = document.querySelector(`[name="date"]`)

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


import { galleryItem, renderGallery } from "./get-gallery-list"

async function createFilterGallery() {
    try {
        /* console.log("itemsOnPage=", itemsOnPage) */
        const data = await api.getAllCharacters({ nameStartsWith: name.textContent, limit: itemsOnPage, comics: comic.textContent, orderBy: `'${order.textContent}'`, modifiedSince: `${date.textContent}`,});
        const results = data.results
        /* console.log(data)
        console.log(results) */
        if (results.length === 0) {
            console.log("NOT FOUND!!!!")
            return
        }
        return renderGallery(results)
    } catch (e) { console.log(e) }    
}

form.addEventListener("submit", async ()=>{
    const galleryList = document.querySelector('.gallery');
    galleryList.innerHTML = ''
    console.log("input", searchQuery)
    galleryList.innerHTML = await createGallery(searchQuery)
    localStorage.removeItem('searchValue');
    createFilterGallery()
})
