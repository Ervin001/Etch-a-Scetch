'use strict';

const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
  const div = document.createElement('div');

  div.classList.add('square', `square--${i}`);
  container.appendChild(div);
}
const squares = document.querySelector('.square');
const squareClick = function (e) {
  e.stopPropagation();
};

const div = document.querySelectorAll('div');

div.forEach((s) =>
  s.addEventListener(
    'click',
    function (e) {
      e.stopPropagation();
      if (e.target !== container) {
        console.log(e.target);
        e.target.classList.toggle('square-color');
      }
      // console.log(squares);
    },
    {
      capture: true,
    }
  )
);
