let display = '';
let num1;
let num2;
let chosenOperator;


function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if (num2 === 0) {
        return "You can't divide by zero";
    }
    else { return num1 / num2;
    }
};

function operate(operator, num1, num2) {
    if (chosenOperator === '+') {
        display = add(num1, num2);
    }
    if (chosenOperator === '-') {
        display = subtract(num1, num2);
    }
    if (chosenOperator === '*') {
        display = multiply(num1, num2)
    }
    if (chosenOperator === '/') {
        display = divide(num1, num2)
    }
    return display
};

const displayValue = document.querySelector('.display');

function refreshDisplay() {
    displayValue.textContent = `${display}`
};

const numbers = document.querySelectorAll('.number');
numbers.forEach((number => {
    number.addEventListener('click', () => {
        display += number.value;
        refreshDisplay();
    });
}));

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    display = '';
    refreshDisplay();
});

const selectOperator = document.querySelectorAll('.operator');
selectOperator.forEach((operator => {
    operator.addEventListener('click', () => {
        chosenOperator = operator.id;
        num1 = display;
        display = '';
        refreshDisplay();
    });
}))

