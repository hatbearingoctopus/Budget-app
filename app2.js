const account = {
  name: 'Autumn',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
  })
  },
  getAccountSummary: function () {
   let totalExpenses = 0
   let totalIncome = 0
   let accountBalance = 0

   this.expenses.forEach(function (expense) {
     totalExpenses = totalExpenses + expense.amount
   })

   this.income.forEach(function 
   (income) {
    totalIncome = totalIncome + income.amount
   })

   accountBalance = totalIncome - totalExpenses

   return `${this.name} has an account balance of: $${accountBalance}, Income of: $${totalIncome}, and Expenses of: $${totalExpenses}.`
  }    
}

account.addExpense('rent', 950)
account.addExpense('coffee', 2.50)
account.addIncome('job', 5000)
console.log(account.getAccountSummary())
