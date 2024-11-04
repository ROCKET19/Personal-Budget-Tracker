let totalIncome = 0;
let totalExpenses = 0;

document.getElementById('addIncome').addEventListener('click', () => {
  const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
  if (!isNaN(incomeAmount) && incomeAmount > 0) {
    totalIncome += incomeAmount;
    updateTotals();
    document.getElementById('incomeAmount').value = '';
  }
});

document.getElementById('addExpense').addEventListener('click', () => {
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
  const expenseCategory = document.getElementById('expenseCategory').value;
  if (!isNaN(expenseAmount) && expenseAmount > 0 && expenseCategory !== '') {
    if (totalIncome - totalExpenses - expenseAmount < 0) {
      alert('Not enough money');
    } else {
      totalExpenses += expenseAmount;
      updateTotals();

      const listItem = document.createElement('li');
      listItem.textContent = `${expenseCategory}: $${expenseAmount}`;
      document.getElementById('expenseList').appendChild(listItem);

      document.getElementById('expenseAmount').value = '';
    }
  }
});

document.getElementById('showIncome').addEventListener('click', () => {
  document.getElementById('incomeSection').classList.remove('d-none');
  document.getElementById('expenseSection').classList.add('d-none');
});

document.getElementById('showExpense').addEventListener('click', () => {
  document.getElementById('incomeSection').classList.add('d-none');
  document.getElementById('expenseSection').classList.remove('d-none');
});

function updateTotals() {
  document.getElementById('totalIncome').innerText = totalIncome.toFixed(2);
  document.getElementById('totalExpenses').innerText = totalExpenses.toFixed(2);
  document.getElementById('totalBalance').innerText = (totalIncome - totalExpenses).toFixed(2);
}
