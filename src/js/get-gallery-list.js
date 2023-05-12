export const galleryItem = galleryItems.map(item => {
  return `<li class="gallery-item">
   <a class="gallery-link" href="">
      <img class="gallery__image" src="${c.thumbnail.path}/${imageSize}.${c.thumbnail.extension}"" alt="" />
   </a>
   <p class="hero-name"></p>
</li>`;
});
