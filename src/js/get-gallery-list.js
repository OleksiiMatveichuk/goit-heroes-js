export const galleryItem = galleryItems.map(item => {
  return `<li class="gallery-item">
   <a class="gallery-link" href="">
      <img class="gallery-image" src="${c.thumbnail.path}/${imageSize}.${c.thumbnail.extension}"" alt="" />
      <p class="hero-name">${item.name}</p>
   </a>
</li>`;
});
