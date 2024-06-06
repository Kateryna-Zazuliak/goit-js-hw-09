let formData = {
    email: "",
    message: "",
}
const registerForm = document.querySelector(".feedback-form");
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');


const saveToLocalStorage = () => {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
window.addEventListener('DOMContentLoaded', () => {
const savedData = loadFromLS('feedback-form-state');
    if (savedData) {
        formData = savedData;
        registerForm.elements.email.value = formData?.email ?? '';
        registerForm.elements.message.value = formData?.message ?? '';
    }
});

registerForm.addEventListener('input', () => {
  formData.email = registerForm.elements.email.value.trim();
  formData.message = registerForm.elements.message.value.trim();

  saveToLS('feedback-form-state', formData);
});

registerForm.addEventListener('submit', e => {
  e.preventDefault();
let email = registerForm.elements.email.value.trim();
let message = registerForm.elements.message.value.trim();
if (email === "" || message === "") {
return alert('Fill please all fields');
};
formData.email = email;
formData.message = message;  
  console.log(formData);

  registerForm.reset();

    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
