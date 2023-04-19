import { nanoid } from 'nanoid';
import copy  from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    const password = nanoid();
    displayPasswordEl.innerHTML = password;
    copy(password);
    window.alert('Senha Copiada')
});