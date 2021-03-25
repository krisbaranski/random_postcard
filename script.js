'use strict';

const btn = document.querySelector('.btn');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Box Element
const box = document.querySelector('.box');

displayMessage('Select a number of postcards (1 - 24)');

btn.addEventListener('click', () => {
  // Number of inputs to create
  var number = Number(document.getElementById('amount').value);

  // Container <div> where dynamic content will be placed
  let container = document.getElementById('container');

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
    // displayMessage('no input');
  }
  for (var i = 0; i < number; i++) {
    var input = document.createElement('DIV');
    input.classList.add('box');
    input.type = 'text';
    container.appendChild(input);
  }
});

box.addEventListener('click', () => {
  box.classList.add('active');
});

if (number === 0 || NaN) {
  displayMessage('no input');
}
