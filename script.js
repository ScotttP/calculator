const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const backSpaceButton = document.querySelector('#clear');
const allClearButton = document.querySelector('#allClear');
const equalsButton = document.querySelector('#evaluate');

function displayOutput(num){
    document.getElementById('current').innerText = num;
}

numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        var displayNumber = document.getElementById('current').innerText;
        displayNumber += number.id;
        return displayOutput(displayNumber);
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operator.id == 'allClear'){
            displayOutput('');
        }
    })
})



/*function add (a,b) {
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
*/