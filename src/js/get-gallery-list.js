
export const galleryItem = item => {
   return `<li class="gallery-item" [data-id = ${item.id}]>
   <a class="gallery-link" href="#">
      <img class="gallery-image" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.description}" />
      <p class="hero-name">${item.name}</p>
   </a>
</li>`;
};
export const renderGallery = arr => {
   return arr.map(galleryItem).join('');
};
///${imageSize}