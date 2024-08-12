let firstNumber;
let secondNumber;
let operator;

// Simple arithmatic operations
function add(firstNumber , secondNumber) {
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate (operator, firstNumber, secondNumber) {
    if (operator = "+") return add(firstNumber, secondNumber);
    else if (operator = "-") return subtract(firstNumber,secondNumber);
    else if (operator = "*") return multiply(firstNumber,secondNumber);
    else if (operator = "/") return divide(firstNumber, secondNumber);
}

// Display
const display = document.getElementById("display");

// Number Buttons
const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click" , function() {
    display.textContent += "1";
});

const buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click" , function() {
    display.textContent += "2";
});

const buttonThree = document.getElementById("three");
buttonThree.addEventListener("click" , function() {
    display.textContent += "3";
});

const buttonFour = document.getElementById("four");
buttonFour.addEventListener("click" , function() {
    display.textContent += "4";
});

const buttonFive = document.getElementById("five");
buttonFive.addEventListener("click" , function() {
    display.textContent += "5";
});

const buttonSix = document.getElementById("six");
buttonSix.addEventListener("click" , function() {
    display.textContent += "6";
});

const buttonSeven = document.getElementById("seven");
buttonSeven.addEventListener("click" , function() {
    display.textContent += "7";
});

const buttonEight = document.getElementById("eight");
buttonEight.addEventListener("click" , function() {
    display.textContent += "8";
});

const buttonNine = document.getElementById("nine");
buttonNine.addEventListener("click" , function() {
    display.textContent += "9";
});

const buttonZero = document.getElementById("zero");
buttonZero.addEventListener("click" , function() {
    display.textContent += "0";
});

// Equals Button
const buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener ("click", function() {
    secondNumber = Number(display.textContent);
    if (operator === "+") {
        display.textContent = add(firstNumber, secondNumber);
    }

    else display.textContent = "";
})

// Operators
const buttonAdd = document.getElementById("add");
buttonAdd.addEventListener("click" , function() {
    operator = "+";
    firstNumber = Number(display.textContent);
    display.textContent = "+";
})

// Clear Button 
const buttonClear = document.getElementById("ac");
buttonClear.addEventListener("click", function() {
    display.textContent = "";
    operator = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
}) 
 