const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = [];

ingredients.forEach(ingredient => {
  
  const item = document.createElement('li');
  item.textContent = ingredient; 
  item.classList.add('item');   
  listOfIngredients.push(item);  
})

const list=document.querySelector('ul#ingredients')
  list.append(...listOfIngredients);
