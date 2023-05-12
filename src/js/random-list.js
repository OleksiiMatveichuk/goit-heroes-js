const randomList = [
  {
    name: 'Ant-Man',
    text: 'Thief turned hero Scott Lang uses size manipulation tech to infiltrate bases and intimidate bad guys.',
  },
  {
    name: 'The Wasp ',
    text: 'Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank Pym) and The Wasp (Janet van Dyne), helps trains her father’s successor Scott Lang and secure the destruction of the Yellowjacket technology.',
  },
  {
    name: 'Cassie Lang',
    text: 'As Scott Lang’s young daughter, Cassie is super proud of her dad’s heroics as Ant-Man.',
  },
  {
    name: 'Kang The Conqueror',
    text: 'The character is most frequently depicted as an opponent of the Avengers and the Fantastic Four.',
  },
  {
    name: 'Hank Pym',
    text: 'Hank Pym is a brilliant scientist who used his discovery of the shrinking Pym Particles, the suit that could survive the process, and insect communication waves, to turn himself into the original Ant-Man.',
  },
];

const ulList = document.querySelector('.random-list');
console.log(ulList);

function createLi(value) {
  return `
    <li class='random-item'>
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
