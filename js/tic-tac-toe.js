// MARKUP
// <button class="js-restart">Restart</button>
// <div class="container">
//   <div class="content"></div>
// </div>

// STYLES
// .container {
//   display: flex;
//   margin: 100px 50px 50px 50px;
// }

// .content {
//   width: 156px;
//   border: 1px solid black;
//   margin: 0 auto;
// }

// .item {
//   width: 50px;
//   height: 50px;
//   line-height: 50px;
//   text-align: center;
//   display: inline-block;
//   font-size: 25px;
//   border: 1px solid black;
//   cursor: pointer;
//   vertical-align: middle;
//   transition: background 0.1s;
// }

// .item:hover {
//   background-color: #f1f1f10c;
// }

const WIN_COMBINATION = [
  [1, 2, 3],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
];

const content = document.querySelector('.content');
const btnRestart = document.querySelector('.js-restart');

let player = 'X';
content.insertAdjacentHTML('beforeend', createMarkup());

content.addEventListener('click', onClick);
btnRestart.addEventListener('click', onRestartClick);

let xMove = [];
let oMove = [];

function onClick(evt) {
  if (evt.target.textContent) {
    alert('Change your move!');
    return;
  }

  const el = evt.target;
  const id = Number(el.dataset.id);

  el.textContent = player;

  if (player === 'X') {
    xMove.push(id);

    if (checkWinComb(xMove)) {
      alert('X wins!!!');
      onRestartClick();
      return;
    }
  } else {
    oMove.push(id);

    if (checkWinComb(oMove)) {
      alert('O wins!!!');
      onRestartClick();
      return;
    }
  }

  if (xMove.length + oMove.length === 9) {
    alert('Draw!');
    onRestartClick();
    player = 'O';
  }

  player = player === 'X' ? 'O' : 'X';
}

function checkWinComb(moves) {
  return WIN_COMBINATION.some(comb => comb.every(id => moves.includes(id)));
}

function onRestartClick() {
  content.innerHTML = createMarkup();
  player = 'X';
  xMove = [];
  oMove = [];
}

function createMarkup() {
  let markup = '';

  for (let i = 0; i < 9; i += 1) {
    markup += `<div class="item" data-id="${i + 1}"></div>`;
  }

  return markup;
}
