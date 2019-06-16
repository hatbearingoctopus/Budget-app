//basic budget app

let myAccount = {
  name: 'Autumn',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
  return account.expenses
}

// addIncome to the account, take account and Amount of income
let addIncome = function (account, income) {
  account.income = account.income + income
}

//resetAccount reset expenses and income to 0 
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

//getAccountSummary-account for andrew has $900. $1000 in income. $100 in expenses 
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `The account for ${account.name} has a balance of $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}

//adding income and expenses
addIncome(myAccount, 2000)
addExpense(myAccount, 150)

//calls to check functionality
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))



