export function createModal1(e) {
  e.preventDefault();
  const body = document.body;

  const modalForm = modal1();

  body.insertAdjacentHTML('beforebegin', modalForm);
  const closeModalForm = document.querySelector('.bacground-modal');
  closeModalForm.addEventListener('click', closeModal);
  //modalForm.addEventListener('click', closeModal);
  //console.log(modalForm);
  // ==============================================
  //   const modal1 = document.createElement('div');
  //   modal1.classList.add('bacground-modal');
  //   modal1.addEventListener('click', closeModal);
  //   const modalWindow = document.createElement('section');
  //   modalWindow.classList.add('modal-window');
  //   const close = document.createElement('button');
  //   close.classList.add('close-modal-btn');
  //   const containerModal = document.createElement('div');
  //   containerModal.classList.add('container-modal');
  //   modalWindow.insertAdjacentElement('afterbegin', containerModal);
  //   modal1.insertAdjacentElement('afterbegin', modalWindow);

  //   body.insertAdjacentElement('afterbegin', modal1);
  //   console.log(modal1, ' ', body);
}

function modal1() {
  return `
    <div class='bacground-modal'> 
    <section class='modal-window'>
    
    <div class'container-modal'>
    <button class='close-modal-btn'>X</button>
    </div>
    <div class='img-info'>
    <img src='../images/remove_img/modal1-img.jpg' alt='amg' width='295'>
    
    </div>
    </section>
    </div>
    
    `;
}

function closeModal(e) {
  console.log('e.target ', e.target.classList.value);
  if (e.target.classList.value === 'bacground-modal') {
    const modal1 = document.querySelector('.bacground-modal');
    modal1.remove();
  }
}
