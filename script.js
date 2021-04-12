'use strict';

const btn = document.querySelector('.btn');
// const boxes = document.querySelectorAll('.box');
const box = document.querySelector('.box');
const container = document.getElementById('container');

function removeAllBoxes() {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
}

function createBox() {
  let box = `<div class='box'></div>`;
  return box;
}

function addBoxes(number) {
  for (let i = 0; i < number; i++) {
    let box = createBox();
    container.insertAdjacentHTML('beforeend', box);
  }
}

function addClickEventToBoxes() {
  let boxes = document.getElementsByClassName('box');
  for (let box of boxes) {
    box.addEventListener('click', showPostcard());
    console.log('hello');
  }
}

function displayBoxes() {
  let number = Number(document.getElementById('amount').value);
  removeAllBoxes();
  addBoxes(number);
  addClickEventToBoxes();
}

function showPostcard() {
  const postcard = document.querySelector('.postcard');
  postcard.classList.remove('hidden');
}

btn.addEventListener('click', displayBoxes);
