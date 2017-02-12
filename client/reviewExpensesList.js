import React, { Component } from 'react'
import $http from "./ajax";

export default class ReviewExpensesList extends Component {
  constructor(props) {
    super(props);
    this.state = {expenses: [] };
  }
  componentDidMount() {
    
     $http.ajaxGet('/expenses')
      .then((r) => {
        
        var response = JSON.parse(r);
        
        var expesnses = [];
        response.map( expense => {
          var date = new Date(expense.date);
          
          expesnses.push({
            id: expense._id,
            dateDay: date.getDate(),
            dateMonth: date.getMonth() + 1,
            dateYear: date.getFullYear(),
            amount: expense.amount,
            category: expense.category,
            description: expense.description
          });
        })
        
        this.setState({expenses: expesnses});
      })
      .catch(function(error) { throw new Error(error); });
  }
  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
         {this.state.expenses.map( (expense, index) =>
              <tr key={expense.id}>
                <td>{expense.dateDay}/{expense.dateMonth}/{expense.dateYear}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
              </tr>
         )}
        </tbody>
      </table>
    )
  }
}
