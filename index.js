//counter program

const decBtn = document.getElementById("decreaseBtn");
const resBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;


incBtn.onclick = function(){

    count++;
    countLabel.textContent = count;
}

decBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resBtn.onclick = function(){

    count = 0;
    countLabel.textContent = count;
}