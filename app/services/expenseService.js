var Expense = require('../../app/models/expense');

function ExpenseService() {
  
};

// class methods
ExpenseService.prototype.storeExpense = function (amount, category, description, date, user) {
  
   return new Promise(function(resolve, reject) {
    
    var newExpense = new Expense();
    newExpense.amount = amount;
    newExpense.category = category;
    newExpense.description = description;
    newExpense.date = date;
    newExpense.user = user;
    
    newExpense.save(function(err) {
        if (err) {
          reject(new Error("Error saving expense"));
        }
        resolve();
    });
   });
  
  };
  
ExpenseService.prototype.getAll = function () {
  
   return new Promise(function(resolve, reject) {
    
    Expense.find({}).sort({date: -1}).exec(function(err, expenses){
      if (err) {
          reject(new Error("Error saving expense"));
        }
        resolve(expenses);
    });
    
   });
  
  };
// export the class
module.exports = ExpenseService;