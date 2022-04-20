'use strict';
const buttonEl = document.querySelector('.reset');
const gridEl = document.querySelector('.grid');
const blackBtnEl = document.querySelector('.black');
const randomBtnEl = document.querySelector('.random');

//Starting Conditions
const createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    //Each div gets an event listener
    div.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = '#000';
    });

    gridEl.appendChild(div);
  }
};

//Generates a random color
const randomColor = function () {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;

  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);

  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
};

//Slider
const slider = document.getElementById('myRange');
let outputVal = document.querySelector('.sliderValue');

// Adjust grid size
slider.addEventListener('input', function (e) {
  let val = document.querySelector('#myRange').value;
  outputVal.textContent = val;
  removeChildNodes(gridEl);

  for (let i = 0; i < val * val; i++) {
    gridEl.setAttribute(
      'style',
      `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
    );
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = '#000';
    });
    gridEl.appendChild(div);
  }
});

// Black button
blackBtnEl.addEventListener('click', function () {
  let val = document.querySelector('#myRange').value;
  const cells = gridEl.childNodes;
  for (let i = 0; i < val * val; i++) {
    cells[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = '#000';
    });
  }
});

// Random button
randomBtnEl.addEventListener('click', function () {
  let val = document.querySelector('#myRange').value;
  const cells = gridEl.childNodes;
  for (let i = 0; i < val * val; i++) {
    cells[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = randomColor();
    });
  }
});

// Remove the cells from the grid
buttonEl.addEventListener('click', function (e) {
  let val = document.querySelector('#myRange').value;
  outputVal.textContent = val;
  removeChildNodes(gridEl);
  gridEl.setAttribute(
    'style',
    `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
  );

  for (let i = 0; i < val * val; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = '#000';
    });
    gridEl.appendChild(div);
  }
});

const removeChildNodes = function (parent) {
  if (parent.hasChildNodes) {
    let children = gridEl.childNodes;

    while (gridEl.firstChild) {
      gridEl.removeChild(gridEl.firstChild);
    }
    return children;
  }
};

createGrid();
