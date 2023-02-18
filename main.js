const generateForm = document.getElementById("generateForm");
const outputField = document.getElementById("output");
const toggleThemeBtn = document.getElementById("toggle-theme");

const state = {
  darkMode: false,
};

generateForm.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(generateForm);
  const boundary = Object.fromEntries(formData.entries());
  const maxValue = Number(boundary.lower_limit);
  const minValue = Number(boundary.upper_limit);
  const randomNumber = generateRandomNumber(maxValue, minValue);
  outputField.textContent = `Random Number: ${randomNumber}`;
};

toggleThemeBtn.onclick = () => {
  state.darkMode = !state.darkMode;
  let theme = state.darkMode ? "Light" : "Dark";
  toggleThemeBtn.textContent = theme;
}

function generateRandomNumber(max, min) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
