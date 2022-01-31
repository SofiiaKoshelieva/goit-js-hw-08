import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

initForm();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));
function onFormSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.target.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formData = {
        email,
        message,
    };
    console.log(formData);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  let userData = localStorage.getItem(STORAGE_KEY);
  userData = userData ? JSON.parse(userData) : {};
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function initForm() {
  let savedUserData = localStorage.getItem(STORAGE_KEY);
  if (savedUserData) {
    savedUserData = JSON.parse(savedUserData);
    Object.entries(savedUserData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}