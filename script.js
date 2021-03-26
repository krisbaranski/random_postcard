'use strict';

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box');
let displayMessage = document.querySelector('.message');
const postcard = document.getElementById('postcard');

console.log(boxes);

displayMessage.textContent = 'Select a number of postcards (1 - 24)';

btn.addEventListener('click', () => {
  let number = Number(document.getElementById('amount').value);
  let container = document.getElementById('container');

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
    displayMessage.textContent = 'no input';
  }
  for (let i = 0; i < number; i++) {
    let input = document.createElement('BUTTON');
    input.classList.add('box');
    container.appendChild(input);
  }
});

const openPostcard = function () {
  postcard.classList.remove('hidden');
};

for (let i = 0; i < boxes; i++)
  boxes[i].addEventListener('click', openPostcard);
console.log(boxes);
