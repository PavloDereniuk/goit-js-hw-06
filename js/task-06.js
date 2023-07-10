const inputField = document.querySelector(`#validation-input`);

inputField.addEventListener(`blur`, chackValueInput);

function chackValueInput(event) {
  inputField.classList.add(`invalid`);
  if (event.currentTarget.value.length === Number(inputField.dataset.length)) {
    inputField.classList.replace(`invalid`, `valid`);
  }
}