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

function modulo(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

function operate (operator, firstNumber, secondNumber) {
    if (operator === "+") return add(firstNumber, secondNumber);
    else if (operator === "~") return subtract(firstNumber,secondNumber);
    else if (operator === "*") return multiply(firstNumber,secondNumber);
    else if (operator === "/") return divide(firstNumber, secondNumber);
    else if (operator === "%") return modulo(firstNumber, secondNumber);
}

function removeOperator() {
    let operatorList = "+~*/%0";
    let string = document.getElementById("display").textContent;
    // Filter out any characters that are operators
    let newString = "";
    for (let char of string) {
        if (!operatorList.includes(char)) {
            newString += char;
        }
    }
    // Update the display with the filtered string
    document.getElementById("display").textContent = newString;
}
 
// Display
const display = document.getElementById("display");

// Number Buttons
const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "1";
});

const buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "2";
});

const buttonThree = document.getElementById("three");
buttonThree.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "3";
});

const buttonFour = document.getElementById("four");
buttonFour.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "4";
});

const buttonFive = document.getElementById("five");
buttonFive.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "5";
});

const buttonSix = document.getElementById("six");
buttonSix.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "6";
});

const buttonSeven = document.getElementById("seven");
buttonSeven.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "7";
});

const buttonEight = document.getElementById("eight");
buttonEight.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "8";
});

const buttonNine = document.getElementById("nine");
buttonNine.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "9";
});

const buttonZero = document.getElementById("zero");
buttonZero.addEventListener("click" , function() {
    removeOperator();
    display.textContent += "0";
});

// Equals Button
const buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener ("click", function() {
    secondNumber = Number(display.textContent.replace(/[^0-9.-]/g, ""));
    display.textContent = operate(operator, firstNumber, secondNumber);
})

// Operators
const buttonAdd = document.getElementById("add");
buttonAdd.addEventListener("click" , function() {
    operator = "+";
    firstNumber = Number(display.textContent);
    display.textContent = "+";
})

const buttonSubtract = document.getElementById("subtract");
buttonSubtract.addEventListener("click" , function() {
    operator = "~";
    firstNumber = Number(display.textContent);
    display.textContent = "~";
});

const buttonMultiply = document.getElementById("multiply");
buttonMultiply.addEventListener("click" , function() {
    operator = "*";
    firstNumber = Number(display.textContent);
    display.textContent = "*";
});

const buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener("click" , function() {
    operator = "/";
    firstNumber = Number(display.textContent);
    display.textContent = "/";
});

const buttonModulo = document.getElementById("modulo");
buttonModulo.addEventListener("click", function() {
    operator = "%";
    firstNumber = Number(display.textContent);
    display.textContent = "%";
});

const buttonNegative = document.getElementById("negative");
buttonNegative.addEventListener("click", function() {
    display.textContent = display.textContent*(-1);
});

// Clear Button 
const buttonClear = document.getElementById("ac");
buttonClear.addEventListener("click", function() {
    display.textContent = "";
    operator = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
}) 

 