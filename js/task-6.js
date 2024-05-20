function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elemInput = document.querySelector("#controls input");
const btnCreate = document.querySelector ("button[data-create]");
const btnDestroy = document.querySelector ("button[data-destroy]");
const boxes = document.querySelector ("#boxes");

btnCreate.addEventListener("click", onBtnClick);
btnDestroy.addEventListener("click", destroyBoxes);

function onBtnClick(event) {
  let amount = elemInput.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  boxes.innerHTML = "";
    let size = 30;
    let markup = "";
    for (let i = 0; i < amount; i++) {
      markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
      size += 10;
    } 
    boxes.innerHTML = markup;
    elemInput.value = "";
  }
function destroyBoxes() {
  boxes.innerHTML = "";
}