'use strict';

const btn = document.querySelector('.btn');
// const boxes = document.querySelectorAll('.box');
const box = document.querySelector('.box');
const container = document.getElementById('container');
const postcard = document.querySelector('.postcard');
// API request
const API_URL = 'https://api.teleport.org/api/urban_areas';

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
  }
}

function displayBoxes() {
  let number = Number(document.getElementById('amount').value);
  removeAllBoxes();
  addBoxes(number);
  showImages();
  addClickEventToBoxes();
}

async function getImages(url) {
  const res = await fetch(url);
  const data = await res.json();

  showImages(data.results);
}

function showImages() {
  getImages(API_URL);
}

function showPostcard() {
  postcard.classList.remove('hidden');

  // if (postcard.classList.contains('hidden')) {
  // } else {
  //   postcard.classList.add('hidden');
  // }
}

btn.addEventListener('click', displayBoxes);
