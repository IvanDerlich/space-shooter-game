// There are fewer ways to pick a DOM node with legacy browsers
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');

// The following is a trick to reach the next sibling Element node in the DOM
// This is dangerous because you can easily build an infinite loop.
// In modern browsers, you should prefer using element.nextElementSibling
let error = email;
while ((error = error.nextSibling).nodeType != 1);

// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Many legacy browsers do not support the addEventListener method.
// Here is a simple way to handle this; it's far from the only one.
function addEvent(element, event, callback) {
  const previousEventCallBack = element[`on${event}`];
  element[`on${event}`] = function (e) {
    const output = callback(e);

    // A callback that returns `false` stops the callback chain
    // and interrupts the execution of the event callback.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
  };
}

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
addEvent(window, 'load', () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed e-mail address.
  const test = email.value.length === 0 || emailRegExp.test(email.value);

  email.className = test ? 'valid' : 'invalid';
});

// This defines what happens when the user types in the field
addEvent(email, 'input', () => {
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = 'valid';
    error.innerHTML = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

// This defines what happens when the user tries to submit the data
addEvent(form, 'submit', () => {
  const test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = 'invalid';
    error.innerHTML = 'I expect an e-mail, darling!';
    error.className = 'error active';

    // Some legacy browsers do not support the event.preventDefault() method
    return false;
  }
  email.className = 'valid';
  error.innerHTML = '';
  error.className = 'error';
});