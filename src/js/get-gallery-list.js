export const galleryItem = item => {
  const { id, name, description } = item;
  const { path, extension } = item.thumbnail;

  return `<li class="gallery-item" data-id = ${id} >
   <a class="gallery-link">
      <img class="gallery-image" src="${path}.${extension}" alt="${description}" />
      <p class="hero-name">${name}</p>
   </a>
</li>`;
};
export const renderGallery = arr => {
  return arr.map(galleryItem).join('');
};
// /${imageSize}

// export const renderGallery = galleryItems => {
//   return galleryItems.map(item => {
//     return `<li class="gallery-item" [data-id = ${item.id}]>
// //    <a class="gallery-link" href="#">
// //       <img class="gallery-image" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.description}" load="lazy" />
// //       <p class="hero-name">${item.name}</p>
// //    </a>
// // </li>`;
//   });
// };
