const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul#ingredients')

const elements = ingredients.map(option => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = option;
  ingredientsEl.classList.add('item');

  return ingredientsEl;
  }
)

listIngredients.append(...elements)