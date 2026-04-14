let income = 0;
let expense = 0;

function addIncome() {
    const incomeInput = document.getElementById("incomeInput").value;
    income += Number(incomeInput);
updateBalance();
}

function addExpense() {
    const expenseInput = document.getElementById("expenseInput").value;
    expense += Number(expenseInput);
updateBalance();
}

function updateBalance() {
    const balance = income - expense;
    document.getElementById("balanceValue").innerText = balance;
}