const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str) {
  // console.log("original string: ", str);
  const regex = /[+-]/g;
  return str.replace(regex, "");
}

// console.log(cleanInputString("+-99"));

function isInvalidInput(str) {
  let regex = /\d+e\d+/i;
  return str.match(regex);
}

// console.log(isInvalidInput("1e3"));
// console.log(isInvalidInput("10"));

function addEntry(){
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll().length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label> 
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" />
  `;

  targetInputContainer.innerHTML += HTMLString;
} 

addEntryButton.addEventListener("click", addEntry);