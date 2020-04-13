var operatorCount = 1; //count of operator used in the formula. this variable prevents user from entering consecutive operators
var decimalCount = 0;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const backSpaceButton = document.querySelector('#backspace');
const allClearButton = document.querySelector('#allClear');
const equalsButton = document.querySelector('#evaluate');

function displayOutput(num){
    document.getElementById('current').innerText = num;
}

equalsButton.addEventListener('click', () => {
    document.getElementById('history').innerText = document.getElementById('current').innerText + ' =';
    document.getElementById('current').innerText = eval(document.getElementById('history').innerText.slice(0,-1));
    
})

numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        var displayNumber = document.getElementById('current').innerText;
        displayNumber += number.id;
        operatorCount = 0;//resets the operatorCount so the user can enter an operator AFTER they select a number
        return displayOutput(displayNumber);
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operatorCount == 0){ // this prevents the user from entering operators consecutively
            var displayOperator = document.getElementById('current').innerText;
            displayOperator += operator.id;
            ++operatorCount; // once operator button is clicked the user can no longer enter another operator
            return displayOutput(displayOperator);
        }else {
            return
        }
    })
})

backSpaceButton.addEventListener('click', () => {
    num = document.getElementById('current').innerText.slice(0,-1)
    var lastValue = num.substring(-1).slice(-1); 
    if (lastValue == '*' || lastValue == '/' ||lastValue == '+' ||lastValue == '-' || lastValue == ''){ //prevents the user from entering another operator when the last character is already an operator or null.
        operatorCount = 1;
    }else{
        operatorCount = 0;
    }
    return displayOutput(num);
})

allClearButton.addEventListener('click', () => {
    curNum = document.getElementById('current').innerText
    curNum = '';  
    operatorCount = 1;
    document.getElementById('history').innerText = ''
    return displayOutput(curNum);
    
})





