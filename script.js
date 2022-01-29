let display

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "You can't divide by zero";
    }
    else { return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        display = add(num1, num2);
    }
    if (operator === '-') {
        display = subtract(num1, num2);
    }
    if (operator === '*') {
        display = multiply(num1, num2)
    }
    if (operator === '/') {
        display = divide(num1, num2)
    }
    return display
}