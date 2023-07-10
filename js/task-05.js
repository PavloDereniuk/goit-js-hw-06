const inputField = document.querySelector('#name-input');

const outputField = document.querySelector('#name-output');

inputField.addEventListener("input", inputChange); 

function inputChange (event) {
    if (event.currentTarget.value === "") {
         outputField.textContent = "Anonymous"}
    else {
        outputField.textContent = event.currentTarget.value
    }
};