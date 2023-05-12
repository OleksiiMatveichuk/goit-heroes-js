export function getHeroModal(data){
    const {/* Деструктуризація всіх необхідних данних */} = data;

    /* Функція створення списку додаткових картинок */
    function createImgList(imgArr){
        imgArr.map(img => {
            return `
            <li>
            <img src="${/* Посилання на титульне зображення */}"/>
            </li>
            `
        })
        .join("");
    }

    /* Функція створення списку коміксів */
    function getComicsList(comicsArr){
        return comicsArr.map(comics => {
            const {img, title, author} = comics;        
            `<li>
                <img src="${img}"/>
                <h3>${title}</h3>
                <p>${author}</p>
            </li>`            
        })
        .join("");
        
    }   
    
    /* Зберігаємо  одне і інше в змінні */
    const comicsList = getComicsList(/* Вставити масив коміксів */);
    const imgList = createImgList(/* Вставити масив картинок */); 

    /* Зберігаємо кінцевий результат в окрему змінну */
    const modal = `
    <div class"hero_modal">
        <div class="title_img">
            <img src="${/* Посилання на головну картинку */}"/>
            <ul class="title_img_gallery">
                ${imgList}
            </ul>
        </div>
        <div class="hero_content">
            <div class="hero_descr">
                <h2>${/* Header */}</h2>
                <p>${/* Data */}</p>
                <p>${/* Description text */}</p>
            </div>
            <div class="comics_list">
                <ul>
                    ${comicsList}
                </ul>
            </div>
        </div>
    </div>
    `;

    /* Повертаємо кінцевий результат */   
    return modal;
}