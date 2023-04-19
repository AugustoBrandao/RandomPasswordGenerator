const { nanoid } = require("nanoid");

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
   displayPasswordEl.innerHTML = nanoid();
})