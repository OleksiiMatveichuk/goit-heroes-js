export async function createPagination(
  paginationLimit,
  array,
  limitButton,
  currentPage,
  redrawDirection
) {
  let pageCount = Math.ceil(array / paginationLimit);
  //let currentPage = 1;
  //currentPage активна сторінка
  let paginatorMacup;
  //limitButton це кількість кнопок які ми хочемо бачити на єкрані
  //redrawDirection направленіе перерісовкі
  const myPagination = document.createElement('div');
  myPagination.classList.add('my-pagination');

  const buttons = await getPaginationNumbers(pageCount);
  const markup = await createNext_Previous(buttons.join(''));

  function reternLibel(i) {
    if (i === '...') {
      if (currentPage === 1) {
        return `prev`;
      } else if (currentPage > limitButton - 3) {
        return `prev`;
      } else {
        return `next`;
      }
    }

    return `Page ${i}`;
  }

  function createArrayBtn(i) {
    if (i === currentPage) {
      return `<bitton class="pagination-number active" page-index=${i} aria-label='Page ${i}'>${i}</bitton>`;
    }

    return `<bitton class="pagination-number" page-index=${i} aria-label=${reternLibel(
      i
    )}>${i}</bitton>`;
  }

  async function getPaginationNumbers(namber) {
    const numberButton = reternNumberButton(namber); // вираховуємо масив наших баттонів

    return numberButton.map(button => createArrayBtn(button));
  }

  function reternNumberButton(namber) {
    const buttonArray = [];

    for (let i = 1; i <= pageCount; i++) {
      buttonArray.push(i);
    }

    if (pageCount <= limitButton) {
      return buttonArray;
    } else {
      if (currentPage !== pageCount) {
        if (redrawDirection?.direction === '>') {
          if (pageCount - currentPage >= limitButton) {
            buttonArray.splice(1, 0, '...');
            buttonArray.splice(2, currentPage - 1);
            buttonArray.splice(limitButton - 2, 0, '...', pageCount);
            buttonArray.splice(limitButton, buttonArray.length - 1);

            return buttonArray;
          } else {
            buttonArray.splice(1, 0, '...');
            buttonArray.splice(2, currentPage - 4);

            return buttonArray;
          }
        }
        if (redrawDirection?.direction === '<') {
          if (pageCount - currentPage <= limitButton) {
            buttonArray.splice(1, 0, '...');
            buttonArray.splice(2, currentPage - limitButton + 2);
            buttonArray.splice(limitButton - 2, limitButton, '...', pageCount);

            return buttonArray;
          } else {
            if (currentPage > limitButton) {
              buttonArray.splice(1, 0, '...');
              buttonArray.splice(2, currentPage - limitButton + 1);
              buttonArray.splice(
                limitButton - 1,
                buttonArray.length,
                '...',
                pageCount
              );

              return buttonArray;
            } else {
              buttonArray.splice(limitButton - 2, 0, '...', pageCount);

              buttonArray.splice(limitButton, buttonArray.length - 1);

              return buttonArray;
            }
          }
        }

        buttonArray.splice(limitButton - 2, 0, '...', pageCount);

        buttonArray.splice(limitButton, buttonArray.length - 1);

        return buttonArray;
      } else {
        buttonArray.splice(1, 0, '...');

        buttonArray.splice(2, buttonArray.length - limitButton);
        return buttonArray;
      }
    }
  }
  async function createNext_Previous(arr) {
    return `
        <nav class="pagination-container">
      <button class="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page">
       &lt;
      </button>
  
      <div id="pagination-numbers">

     ${arr}

     </div>
  
     <button class="pagination-button" id="next-button" title="Next page" aria-label="Next page">
      &gt;
     </button>
   </nav>`;
  }

  return markup;
}
