function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector ("body");
changeColorButton.addEventListener ("click", event => {
const randomColorHex = getRandomHexColor();
body.style.backgroundColor = randomColorHex;
spanColor.textContent = randomColorHex;
});


