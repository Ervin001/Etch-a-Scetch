'use strict';
const buttonEl = document.querySelector('button');
const container = document.querySelector('.container');

const starter = function (num) {
  for (let i = 1; i <= (num === undefined ? 16 : num); i++) {
    const div = document.createElement('div');

    div.classList.add('square', `square--${i}`);
    container.appendChild(div);
  }
};

container.style.gridTemplateColumns = null;
container.style.gridTemplateRows = null;

const squares = document.querySelector('.square');
const div = document.querySelectorAll('.square');
const nodeToArr = [...div];

const newGrid = function (number) {
  const sqrNum = Math.sqrt(number);
  starter(number);
  console.log(sqrNum);
  container.style['grid-template-columns'] = null;
  container.style['grid-template-rows'] = null;

  // debugger;
  for (let i = 0; i < number; i++) {
    container.style['grid-template-columns'] = `repeat(${sqrNum}, 100px)`;
    container.style['grid-template-rows'] = `repeat(${sqrNum}, 100px)`;
  }
};
// newGrid(4);
newGrid(9);
// newGrid(16);
// newGrid(25);
// newGrid(36);
// newGrid(49);
// newGrid(64);
