const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an e-mail address!');
  } else {
    email.setCustomValidity('');
  }
});