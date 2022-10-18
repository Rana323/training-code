'use strict';
const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeOverlay = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
const openOverlay = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener('click', openOverlay);

btnClose.addEventListener('click', closeOverlay);
overlay.addEventListener('click', closeOverlay);

// btnClose.addEventListener('click', function () {
//   overlay.classList.add('hidden');
//   modal.classList.add('hidden');
// });

// document.querySelector('.show-modal').addEventListener('click', function () {
//   document.querySelector('.modal').classList.add('show');
//   document.querySelector('.modal').classList.remove('hidden');
//   document.querySelector('.overlay').classList.remove('hidden');
// });

// document.querySelector('.close-modal').addEventListener('click', function () {
//   document.querySelector('.modal').classList.add('hidden');
//   document.querySelector('.modal').classList.remove('show');
//   document.querySelector('.overlay').classList.add('hidden');
// });
