//1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categories = document.querySelectorAll('.item');
console.log('Number of categories:',categories.length);


//2.Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).


    const categoryHeading = document.querySelector('.item h2');
const category = document.querySelector('.item ul');


console.log('Category:', categoryHeading.textContent);
console.log('Elements:', category.children.length);


