// income inputs
const incomeSalaryInput = document.getElementById('income-salary'),
      incomeFreelanceInput = document.getElementById('income-freelance'),
      incomeExtra1Input = document.getElementById('income-extra-1'),
      incomeExtra2Input = document.getElementById('income-extra-2');

// expenses inputs
const expensesHouseInput = document.getElementById('expenses-house'),
      expensesTransoprtInput = document.getElementById('expenses-transport'),
      expensesCreditsInput = document.getElementById('expenses-credits'),
      expensesRentInput = document.getElementById('expenses-rent');

let totalPerMonth, totalPerDay, totalYear;

// output data
const availablePerMonthInput = document.getElementById('available-month'),
      availablePerDayInput = document.getElementById('available-day'),
      accumulatedPerYearInput = document.getElementById('accumulated-year'),
      rangeInput = document.getElementById('range'),
      rangePercents = document.querySelector('.range-percents'),
      accumulationInput = document.getElementById('accumulation'),
      spendInput = document.getElementById('spend');

let totalPercents = 0;
let accumulation = 0;

const inputs = document.querySelectorAll('.calculator-data__column-input');

inputs.forEach(input => input.addEventListener('input', () => {
    calculatingAvaliableMoney();
    calculationsPercents();
}));

function strToNum(elem) {
    return elem.value ? parseInt(elem.value): 0;
}

function calculatingAvaliableMoney() {
    const incomePerMonth = strToNum(incomeSalaryInput) + strToNum(incomeFreelanceInput) + strToNum(incomeExtra1Input) + strToNum(incomeExtra2Input);
    const expensesPerMonth = strToNum(expensesHouseInput) + strToNum(expensesTransoprtInput) + strToNum(expensesCreditsInput) + strToNum(expensesRentInput);
    totalPerMonth = incomePerMonth - expensesPerMonth;
    availablePerMonthInput.value = totalPerMonth;
}

rangeInput.addEventListener('input', (e) => {
    totalPercents = e.target.value;
    rangePercents.innerHTML = totalPercents;
    calculationsPercents()
})

function calculationsPercents() {
    totalPerMonth = totalPerMonth || 0;
    accumulation = ((totalPerMonth * totalPercents) / 100).toFixed();
    accumulationInput.value = accumulation;
    let canSpend = totalPerMonth - accumulation;
    spend.value = canSpend;

    totalPerDay = (spend.value / 30).toFixed();
    availablePerDayInput.value = totalPerDay;

    totalYear = accumulation * 12;
    accumulatedPerYearInput.value = totalYear;
}