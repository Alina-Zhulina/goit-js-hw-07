const inputElem = document.querySelector(`#name-input`);
const outputElem = document.querySelector(`#name-output`);
inputElem.addEventListener(`input`, (event) => {
const value = inputElem.value.trim();
outputElem.textContent = value ? value : 'Anonymous';
});
