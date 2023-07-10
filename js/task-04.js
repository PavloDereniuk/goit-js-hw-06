const addButton = document.querySelector('[data-action=decrement]');
const subtractButton = document.querySelector('[data-action=increment]');
const Value = document.querySelector('#value');

let counterValue = 0;


addButton.addEventListener("click", () => {
    counterValue += 1;
    Value.textContent = counterValue
  });


  subtractButton.addEventListener("click", () => {
    counterValue -= 1;
    Value.textContent = counterValue
  });  