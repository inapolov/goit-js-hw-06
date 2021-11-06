const counterValueUI = document.querySelector('#value');
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;   
    counterValueUI.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    counterValueUI.textContent = counterValue;
});