import React from 'react'
import ReactDOM from 'react-dom'

let render = () => {
  const ReviewExpensesList = require('./reviewExpensesList').default;
  
  ReactDOM.render(
    <ReviewExpensesList/>,
    document.getElementById('reviewExpensesPage')
  )
}

render();