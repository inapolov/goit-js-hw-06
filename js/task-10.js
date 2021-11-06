function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createEl.addEventListener("click", createBoxes);

let amount = 0;
inputEl.addEventListener("input", (event) => {
  amount = event.currentTarget.value;  
})

function createBoxes() {
  
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement('div');
    width += 10;
    height += 10;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = `${getRandomHexColor()}`;
  boxesEl.appendChild(box);
  }
 
};

destroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
};