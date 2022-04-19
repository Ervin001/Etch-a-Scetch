'use strict';
const buttonEl = document.querySelector('button');
const gridEl = document.querySelector('.grid');

const createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
    });

    gridEl.appendChild(div);
  }
};

createGrid();
