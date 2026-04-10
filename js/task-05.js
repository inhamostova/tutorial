const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(evt) {
  if (evt.currentTarget.value) {
    output.textContent = evt.currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
}
