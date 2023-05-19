const keys = [
  {
    publickey: '6098703cb93535806af01869e44e21c4',
    privatekey: 'fc32c1d6f8408c5efa07ea334cecc41e18ba0403',
  },
  {
    publickey: '3e8547eb41b42a9a2a1ebdd17f3eee37',
    privatekey: '1eb0a59387ba717430ceb4d1fa44d25acc6fdeb0',
  },
  {
    publickey: 'caba337208b47569b1f84f369984c4a2',
    privatekey: 'b496be0246e5deafeb43afa6abcf6a04e1453022',
  },
  {
    publickey: 'b2ba5cf7f393b75848da1f17ffee17c0',
    privatekey: '5989cbe1424cbcf47b54f696074d761708739dd1',
  },
]

let keyR = {};
function getRandomKey() {
  return keys[Math.floor(Math.random() * keys.length)];
}
function updateKey() {
  return getRandomKey();
  console.log('Key updated:', keyR);
}
// Initial key setup
export let key = updateKey();
// key update every hour
setInterval(updateKey, 60 * 60 * 60 * 1000);

window.addEventListener('reset', updateKey())

// export const key = keys[Math.round(Math.random() * (keys.length - 1))];


// export const key = {
//   publickey: '6098703cb93535806af01869e44e21c4',
//   privatekey: 'fc32c1d6f8408c5efa07ea334cecc41e18ba0403',
// }

// export const key = {
//   publickey: '3e8547eb41b42a9a2a1ebdd17f3eee37',
//   privatekey: '1eb0a59387ba717430ceb4d1fa44d25acc6fdeb0',
// };

// export const key = {
//   publickey: '3e8547eb41b42a9a2a1ebdd17f3eee37',
//   privatekey: '1eb0a59387ba717430ceb4d1fa44d25acc6fdeb0',
// };


// export const key = {
//   publickey: 'b2ba5cf7f393b75848da1f17ffee17c0',
//   privatekey: '5989cbe1424cbcf47b54f696074d761708739dd1',
// };

