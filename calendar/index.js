'use strict';

const body = document.querySelector('body');
const btnBack = document.querySelector('.btn-back')
const btnToday = document.querySelector('.btn-today')
const btnNext = document.querySelector('.btn-next')
const monthDays = document.querySelector('.month-days');
const numText = document.querySelector('.num-text');
const monthName = document.querySelector('.month-name');
const modalWindow = document.querySelector('.modal-window');
const btnSave = document.querySelector('.btn-save');
const btnCancel = document.querySelector('.btn-cancel');
const inputText = document.querySelector('.input-text');


const nameOfMonth = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



const today = new Date();

let counter = 1;

function monthBack() {
    monthDays.innerHTML = ``;
    counter--;
    let month = today.getMonth() + counter;
    let dayInMonth = new Date(today.getFullYear(), month, 0);
    monthName.innerHTML = `${nameOfMonth[dayInMonth.getMonth()]}`
    for (let i = 1; dayInMonth.getDate() >= i; i++) {
        monthDays.innerHTML += `<div class="num"><h2>${i}</h2></div>`
    }

}

function monthToday() {
    monthDays.innerHTML = ``;
    let dayInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    monthName.innerHTML = `${nameOfMonth[today.getMonth()]}`
    for (let i = 1; dayInMonth.getDate() >= i; i++) {

        monthDays.innerHTML += `<div class="num"><h2>${i}</h2></div>`
    }
    counter = 1;
}
function monthNext() {
    monthDays.innerHTML = ``;
    counter++;
    let month = today.getMonth() + counter;
    let dayInMonth = new Date(today.getFullYear(), month, 0);
    monthName.innerHTML = `${nameOfMonth[dayInMonth.getMonth()]}`
    for (let i = 1; dayInMonth.getDate() >= i; i++) {
        monthDays.innerHTML += `<div class="num"><h2>${i}</h2></div>`
    }
}

btnBack.addEventListener('click', monthBack);
btnToday.addEventListener('click', monthToday);
btnNext.addEventListener('click', monthNext);
monthDays.addEventListener('click', addEvent);
btnCancel.addEventListener('click', closeModal);
btnSave.addEventListener('click', addText)

function closeModal() {
    modalWindow.style.display = 'none';
}
let day = null;
function addEvent(e) {
    day = e.target;
    modalWindow.style.display = 'block';
}
function addText() {
    console.log(day);
    day.innerHTML += `<p class = "num-text">${inputText.value}</p>`;
    inputText.value = '';
}
window.onload = monthToday();
