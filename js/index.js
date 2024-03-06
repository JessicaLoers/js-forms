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

  // Get all form elements (all inputs, select, date etc.)
  const formElements = event.target.elements;

  // Log the value of the input field with the name 'firstName'
  console.log('value of first input', formElements.firstName.value);
  // Log the value of the input field with the name 'LastName'
  console.log('value of second input', formElements.lastName.value);

  // Reset the form to its initial values
  event.target.reset();
  // Set focus to the 'firstName' input field
  event.target.elements.firstName.focus();
});
