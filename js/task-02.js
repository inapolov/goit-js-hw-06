const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient; 
  item.classList.add('item'); 

const list=document.querySelector('ul#ingredients')
  list.appendChild(item);
})

