const refs = {
  container: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    arr.push(div);
  }

  refs.container.append(...arr);
}

refs.btnCreate.addEventListener('click', onClickCreate);
refs.btnDestroy.addEventListener('click', onClickDestroy);

function onClickCreate() {
  onClickDestroy();
  const amount = Number(refs.input.value);
  createBoxes(amount);
}

function onClickDestroy() {
  refs.container.innerHTML = '';
}
