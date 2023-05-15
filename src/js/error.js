export function errorGallery() {
  const gallery = document.querySelector('.gallery');
  createElement = `<li class="error-item"><p class="error-message">Try  looking for something else..</p></li >`;
  gallery.innerHTML = createElement;
}
errorGallery();
