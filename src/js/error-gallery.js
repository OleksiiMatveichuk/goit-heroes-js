export function errorGallery() {
  const gallery = document.querySelector('.gallery');
  const errorMessage = `<li class="error-item"><p class="error-message">Try  looking for something else..</p></li>`;
  gallery.innerHTML = errorMessage;
}
errorGallery();
