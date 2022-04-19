'use strict';
const buttonEl = document.querySelector('.reset');
const gridEl = document.querySelector('.grid');

const createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = '#000';
    });

    gridEl.appendChild(div);
  }
};

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
const output = document.querySelector('.sliderValue');
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// Remove the cells from the grid
buttonEl.addEventListener('click', function (e) {
  removeChildNodes(gridEl);

  const cells = 9;

  for (let i = 0; i < cells * cells; i++) {
    gridEl.setAttribute(
      'style',
      `grid-template-columns: repeat(${cells}, 2fr); grid-template-rows: repeat(${cells}, 2fr);`
    );

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
      // console.log(gridEl);
    }
    return children;
  }
};

createGrid();
