let display = '0';
let num1 = null;
let chosenOperator = null;

const displayValue = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear')
const selectOperator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const addDecimal = document.querySelector('.decimal');
const takePercent = document.querySelector('.percent');
const choosePositiveNegative = document.querySelector('.posNeg');

function refreshDisplay() {
    x = parseFloat(display);
    displayValue.textContent = `${display}`
};

function add(num1, display) {
    return parseFloat(num1) + parseFloat(display);
};

function subtract(num1, display) {
    return num1 - display;
};

function multiply(num1, display) {
    return num1 * display;
};

function divide(num1, display) {
    return num1 / display;
};

function operate() {
    if (chosenOperator === '+') {
        display = add(num1, display)
    }
    if (chosenOperator === '-') {
        display = subtract(num1, display);
    }
    if (chosenOperator === '*') {
        display = multiply(num1, display);
    }
    if (chosenOperator === '/') {
        if (display === 0 || display === '0') {
            alert("NICE TRY - CAN'T DIVIDE BY 0");
            clearValues();
            return null;
        }
        else {
            display = divide(num1, display);
        }
    }
    chosenOperator = null;
    refreshDisplay();
    return display;
};

numbers.forEach((number => {
    number.addEventListener('click', () => {
        if (display === '0' || display === 0) {
            display = '';
            display += number.value;
        }
        else {
        display += number.value;
        }
        refreshDisplay();
    });
}));

function clearValues() {
    display = '0';
    num1 = null;
    chosenOperator = null;
    refreshDisplay();
}

clear.addEventListener('click', clearValues);

selectOperator.forEach((operator => {
    operator.addEventListener('click', () => {
        switch(chosenOperator) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (num1 !== null && display !== '') {
                    operate();
                    num1 = parseFloat(display);
                    display = '';
                }
            chosenOperator = operator.id;
            break;
            case null: {
                if (num1 === null || num1 === '') {
                    chosenOperator = operator.id;
                    num1 = parseFloat(display);
                    display = '';
               }
                else {
                    chosenOperator = operator.id;
                    num1 = display;
                    display= '';
                }
                break;
             }
        }
    });
}));

equals.addEventListener('click', operate);


takePercent.addEventListener('click', () => {
    if (display === '' && chosenOperator !== null) {
        display = num1 / 100; 
    }
    else {
        display = Number(display) / 100;
    }
    refreshDisplay();
    return display;
});

addDecimal.addEventListener('click', () => {
    if (display.includes('.') === false) {
        if (display === '' || display === '0') {
            display = '0';
            display += '.'
    }
        else {
            display += '.'
    }
    refreshDisplay();
    return display;
}
});

choosePositiveNegative.addEventListener('click', () => {
    if (display !== '') {
        display *= -1;
        refreshDisplay();
        return display;
    }
    else {display += '-'}
})