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
    for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
      size += 10;
    } 
    elemInput.value = "";
  }
function destroyBoxes() {
  boxes.innerHTML = "";
}