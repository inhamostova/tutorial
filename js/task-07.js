const input = document.querySelector('input#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(evt) {
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
