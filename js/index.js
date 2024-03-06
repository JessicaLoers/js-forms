// speichert unser "Formular"
const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector('[data-js="remaining-characters"]');

messageInput.addEventListener('input', (event) => {
  charactersLeftElement.textContent = 150 - event.target.value.length;
});

// Add an event listener to the form for the "submit" event - we already knew the event type "click"
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior (e.g. page reload)
  event.preventDefault();

  // Create a FormData object for the form that triggered the event.
  // FormData objects are used to capture the values of the form fields.
  const form = new FormData(event.target);

  // Convert the FormData object into a regular JavaScript object.
  const formData = Object.fromEntries(form);

  // Log the resulting: all form input names as keys and their corresponding values.
  // This object makes it easier and "faster" to access form data
  console.log('object of all input elements', formData);

  // Reset the form to its initial values
  event.target.reset();
  // Set focus to the 'firstName' input field
  event.target.elements.firstName.focus();
});
