// This variable sotres the number of buttons with class calculator-button.

var numberOfButtons = document.querySelectorAll(".calculator-button").length;

//this function does all the calculation.
function operations(a, b, operator){
    operator(a,b);
}

//All the operations that calculator can do.
function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


