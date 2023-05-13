import { createModal1 } from './createModal1';

const randomList = [
  {
    id: 1,
    name: 'Ant-Man',
    text: 'Thief turned hero Scott Lang uses size manipulation tech to infiltrate bases and intimidate bad guys.',
  },
  {
    id: 2,
    name: 'The Wasp ',
    text: 'Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank Pym) and The Wasp (Janet van Dyne), helps trains her father’s successor Scott Lang and secure the destruction of the Yellowjacket technology.',
  },
  {
    id: 3,
    name: 'Cassie Lang',
    text: 'As Scott Lang’s young daughter, Cassie is super proud of her dad’s heroics as Ant-Man.',
  },
  {
    id: 4,
    name: 'Kang The Conqueror',
    text: 'The character is most frequently depicted as an opponent of the Avengers and the Fantastic Four.',
  },
  {
    id: 5,
    name: 'Hank Pym',
    text: 'Hank Pym is a brilliant scientist who used his discovery of the shrinking Pym Particles, the suit that could survive the process, and insect communication waves, to turn himself into the original Ant-Man.',
  },
];

const ulList = document.querySelector('.random-list');
const clickBtn = document.querySelector('.allCharactersBtn');
clickBtn.addEventListener('click', createModal1);

ulList.addEventListener('click', handleClickItem);
function handleClickItem(e) {
  if (e.target.tagName !== 'UL') {
    let li = document.querySelectorAll('li');
    const id = e.target.closest('li').id;
    let i = 0;
    li.forEach(item => {
      let activeLink = document.querySelector('.random-item.active');
      const p = item.querySelector('p');
      console.log(p);
      if (activeLink) {
        activeLink.classList.remove('active');
      }
      e.target.closest('li').classList.add('active');

      //   if (item.id === id) {
      //     console.log(id, 'Так');
      //     e.target.closest('li').classList.add('activ');
      //   } else {
      //     console.log(id, 'ні');
      //     e.target.closest('li').classList.remove('activ');
      //   }
      // ?
      // : ;
    });
  }
}

function createLi(value) {
  return `
    <li class='random-item' id=${value.id}>
       <h3 class='random-value-name hero-name'>${value.name}</h3>
       <p class='random-value-text'>${value.text}</p>
    </li>
    `;
}

function gerRandomCharacters(array) {
  return array.map(character => createLi(character)).join('');
}
const markup = gerRandomCharacters(randomList);
ulList.innerHTML = markup;
