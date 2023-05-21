export async function createPagination(
  paginationLimit,
  array,
  limitButton,
  currentPage
) {
  console.log(
    'запрос ',
    paginationLimit,
    ' ',
    array,
    ' ',
    limitButton,
    ' ',
    currentPage
  );
  let pageCount = Math.ceil(array / paginationLimit);
  //let currentPage = 1;
  //currentPage активна сторінка
  let paginatorMacup;
  //limitButton це кількість кнопок які ми хочемо бачити на єкрані

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
    //let battonArray = [];

    const numberButton = reternNumberButton(namber); // вираховуємо масив наших баттонів

    return numberButton.map(button => createArrayBtn(button));
  }

  function reternNumberButton(namber) {
    const buttonArray = [];

    for (let i = 1; i <= pageCount; i++) {
      buttonArray.push(i);
    }
    console.log(pageCount, '<= ', limitButton);
    if (pageCount <= limitButton) {
      return buttonArray;
    } else {
      console.log(currentPage, ' ', limitButton);
      if (currentPage !== pageCount) {
        //если ударили не по Максимальному Page buttton

        buttonArray.splice(limitButton - 2, 0, '...', pageCount);
        console.log('1arr===', buttonArray);
        buttonArray.splice(limitButton, buttonArray.length - 1);
        console.log('1arrbutt', buttonArray);
        return buttonArray;
      } else {
        // buttonArray.splice(limitButton- (limitButton - 1), 0, '...', pageCount);
        buttonArray.splice(1, 0, '...');
        console.log('1arr===', buttonArray);
        buttonArray.splice(2, buttonArray.length - limitButton);
        return buttonArray;
        //buttonArray.splice(limitButton, buttonArray.length - 1);
        // console.log('2arrbutt', buttonArray);
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

{
  /* <ul id="paginated-list" aria-live="polite">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
  <li>Item 9</li>
  <li>Item 10</li>
  <li>Item 11</li>
  <li>Item 12</li>
  <li>Item 13</li>
  <li>Item 14</li>
  <li>Item 15</li>
  <li>Item 16</li>
 
</ul>; */
}
