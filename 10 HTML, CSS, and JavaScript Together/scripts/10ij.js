let calculation = localStorage.getItem('calculation') || '';
const calculationOutput = document.querySelector('.js-calculation-output');
calculationOutput.innerHTML = calculation;

const numberButtons = document.querySelectorAll('.js-number-btn');

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', updateCalculation);
}

const operatorButtons = document.querySelectorAll('.js-operator-btn');

for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', updateCalculation);
}

function updateCalculation() {
  
  calculation += document.activeElement.innerText;
  localStorage.setItem('calculation', calculation);
  calculationOutput.innerHTML = calculation;
}

document.querySelector('.js-equals-btn').addEventListener('click', function() {
  calculation = eval(calculation);
  localStorage.setItem('calculation', calculation);
  calculationOutput.innerHTML = calculation;
})

document.querySelector('.js-clear-btn').addEventListener('click', function() {
  calculation = '';
  localStorage.removeItem('calculation');
  calculationOutput.innerHTML = calculation;
})