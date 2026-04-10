const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value.trim();
  const password = evt.currentTarget.elements.password.value.trim();

  const data = {
    email,
    password,
  };

  if (!email || !password) {
    alert('всі поля повинні бути заповнені.');
  } else {
    console.log(data);
    evt.currentTarget.reset();
  }
}
