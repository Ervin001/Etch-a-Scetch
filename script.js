'use strict';
const buttonEl = document.querySelector('button');
const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
  const div = document.createElement('div');

  div.classList.add('square', `square--${i}`);
  container.appendChild(div);
}
const squares = document.querySelector('.square');

const div = document.querySelectorAll('.square');
const nodeToArr = [...div];

nodeToArr.forEach((e) =>
  e.addEventListener('mousemove', function (mv) {
    mv.target.classList.add('square-color');
  })
);

buttonEl.addEventListener('click', function (i) {
  nodeToArr.forEach((e) => e.classList.remove('square-color'));
});
