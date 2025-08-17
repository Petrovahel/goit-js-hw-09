const form = document.querySelector('form');

const formData = {
  email: "",
  message: ""
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const target = event.target;
  if (target.name === 'email' || target.name === 'message') {
    formData[target.name] = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  form.reset();
});
