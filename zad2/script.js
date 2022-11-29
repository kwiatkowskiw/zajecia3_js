const addBtn = document.querySelector('.addBtn');
const changeColorBtn = document.querySelector('.changeColor');
const counter = document.querySelector('.counter');

addBtn.addEventListener('click', handleAddBtn);
changeColorBtn.addEventListener('click', handleChangeColor);

function handleAddBtn(){
    const result = Number(counter.innerText);
    counter.innerText = result + 1;
}

function handleChangeColor(){
    counter.classList.toggle('change-color');
}