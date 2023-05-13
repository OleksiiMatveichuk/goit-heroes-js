export const galleryItem = galleryItems.map(item => {
  return `<li class="gallery-item" [data-id = ${item.id}]>
   <a class="gallery-link" href="#">
      <img class="gallery-image" src="${item.thumbnail.path}/${imageSize}.${item.thumbnail.extension}" alt="${item.name}" />
      <p class="hero-name">${item.name}</p>
   </a>
</li>`;
});
