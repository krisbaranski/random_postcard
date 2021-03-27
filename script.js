'use strict';

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
let displayMessage = document.querySelector('.message');
const boxes = document.querySelectorAll('.box');

box.classList.add('hidden');
displayMessage.textContent = 'No Input!';

btn.addEventListener('click', () => {
  let number = Number(document.getElementById('amount').value);
  let container = document.getElementById('container');

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < number; i++) {
    let input = document.createElement('BUTTON');
    input.classList.add('box');
    input.classList.remove('hidden');
    container.appendChild(input);
  }
  console.log(number);

  if (number === 0 || !number) {
    displayMessage.textContent = 'No Input!';
  }

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      let postcard = document.getElementById('postcard');
      postcard.classList.remove('hidden');
      box.appendChild(postcard);
    });
  });
  console.log(boxes);
});
