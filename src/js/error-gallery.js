export function errorGallery() {
  return `<li class="error-item"><p class="error-message">Try  looking for something else..</p></li>`;
}

export function errorAPI(er) {
  return `<li class="error-item"><p class="error-message">Bad request. ${er}</p></li>`;
}