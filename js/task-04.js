const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnDecrement.addEventListener('click', onDecrementClick);
refs.btnIncrement.addEventListener('click', onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
