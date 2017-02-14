// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var expenseSchema = mongoose.Schema({

    user: String,
    date: Date,
    amount: Number,
    category: String,
    description: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Expense', expenseSchema);