// speichert unser "Formular"
const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector('[data-js="remaining-characters"]');

// Add an event listener to the 'messageInput' element that triggers on every input event (e.g., each time the user types something)
messageInput.addEventListener('input', (event) => {
  // Update the text content with the number of characters left
  // This is calculated by subtracting the length of the current value (it's a string) in the input field from the maximum allowed characters (150 in this case)
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
