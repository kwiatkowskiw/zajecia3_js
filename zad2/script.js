const addBtn = document.querySelector('.addBtn');
const changeColorBtn = document.querySelector('.changeColor');
const counter = document.querySelector('.counter');

addBtn.addEventListener('click', handleAddBtn);
changeColorBtn.addEventListener('click', handleChangeColor);

function handleAddBtn(){
    counter.innerText = Number(counter.innerText + 1);
}

function handleChangeColor(){
    counter.classList.toggle('change-color');
}