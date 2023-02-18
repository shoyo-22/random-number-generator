const generateForm = document.getElementById("generateForm");
const outputField = document.getElementById("output");

generateForm.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(generateForm);
  const boundary = Object.fromEntries(formData.entries());
  const maxValue = Number(boundary.lower_limit);
  const minValue = Number(boundary.upper_limit);
  const randomNumber = generateRandomNumber(maxValue, minValue);
  outputField.textContent = `Random Number: ${randomNumber}`;
};

function generateRandomNumber(max, min) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
