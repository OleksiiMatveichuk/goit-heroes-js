export async function createPagonation(paginationLimit, array) {
  let pageCount = Math.ceil(array / paginationLimit);
  let currentPage = 1;
  let paginatorMacup;

  const myPagination = document.createElement('div');
  myPagination.classList.add('my-pagination');

  const buttons = await getPaginationNumbers(pageCount);
  const markup = await createNext_Previous(buttons.join(''));

  function createArrayBtn(i) {
    return `<bitton class="pagination-number" page-index=${i} aria-label='Page ${i}'>${i}</bitton>`;
  }

  async function getPaginationNumbers(namber) {
    let battonArray = [];
    for (let i = 1; i <= pageCount; i++) {
      // battonArray.push(appendPageNumber(i));
      battonArray.push(createArrayBtn(i));
    }
    return battonArray;
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
  // const nextButton = document.getElementById('next-button');
  // const prevButton = document.getElementById('prev-button');

  // // console.log('prevButton', prevButton);
  // function disableButton(button) {
  //   button.classList.add('disabled');
  //   button.setAttribute('disabled', true);
  // }

  // function enableButton(button) {
  //   button.classList.remove('disabled');
  //   button.removeAttribute('disabled');
  // }

  // function handlePageButtonsStatus() {
  //   if (currentPage === 1) {
  //     disableButton(prevButton);
  //   } else {
  //     enableButton(prevButton);
  //   }

  //   if (pageCount === currentPage) {
  //     disableButton(nextButton);
  //   } else {
  //     enableButton(nextButton);
  //   }
  // }

  // function handleActivePageNumber() {
  //   document.querySelectorAll('.pagination-number').forEach(button => {
  //     button.classList.remove('active');
  //     const pageIndex = Number(button.getAttribute('page-index'));
  //     if (pageIndex == currentPage) {
  //       button.classList.add('active');
  //     }
  //   });
  // }

  // function setCurrentPage(pageNum) {
  //   currentPage = pageNum;

  //   const prevRange = (pageNum - 1) * paginationLimit;
  //   const currRange = pageNum * paginationLimit;
  //   listItems.forEach((item, index) => {
  //     item.classList.add('hidden');
  //     if (index >= prevRange && index < currRange) {
  //       item.classList.remove('hidden');
  //     }
  //   });
  // }

  // console.log('MARKAP', markup);

  // const paginationNumbers = document.getElementById('pagination-numbers');

  // paginationNumbers.addEventListener('click', handleActivePageNumber);

  // const paginatedList = document.getElementById('paginated-list');

  // const listItems = paginatedList.querySelectorAll('li');

  //   return markup;
  // });

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
