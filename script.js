const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#submit');
const allClearButton = document.querySelector('#allClear');
const deleteButton = document.querySelector('#backspace');
const previousOperand = document.querySelector('previous-operand');
const currentOperand = document.querySelector('current-operand');

function add (a,b) {
    return a+b;
}
function subtract (a,b) {
    return a-b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b) {
    answer = (a===0 || b===0) ? 'can\'t divide by zero': a/b;
    return answer;
}

function operate (operator,a,b){
    switch (operator){
        case '+':
            console.log(add(a,b))
            break;
        case '-':
            console.log(subtract(a,b))
            break;
        case '*':
            console.log(multiply(a,b))
            break;
        case '/':
            console.log(divide(a,b))
            break;
    }
}

function updateDisplay (){
    numberButtons.forEach(number => {
        number.addEventListener('click', () => {
            document.getElementById('current-operand').innerHTML = number.innerText;
        })
    })
    operatorButtons.forEach(operator => {
        operator.addEventListener('click', () => {
            document.getElementById('current-operand').innerHTML = operator.innerText;
        })
    })
    
}
function append () {
  
}

updateDisplay ();
append();