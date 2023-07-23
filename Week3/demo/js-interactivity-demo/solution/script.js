console.log("JS file has conneced...")

let count = 0;


// when + btn clicked increment count++
let counter = document.querySelector('h1');
let plusBtn = document.querySelector('#plusBtn');
let  minusBtn = document.querySelector('#minusBtn');
let resetBtn = document.querySelector('#resetBtn');

let increment = () => {
    count++;
    counter.textContent = count;
    // console.log(count);
}

let decrement = () => {
    count--;
    counter.textContent = count;
}

let reset = () => {
    count = 0;
    counter.textContent = count;
}


plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);


// when - btn clicked decrement count--
// when reset btn clicked set count = 0