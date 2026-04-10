const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlur);

function onBlur(evt) {
  if (Number(evt.currentTarget.dataset.length) <= evt.currentTarget.value.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
}
