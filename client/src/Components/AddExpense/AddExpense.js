import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addExpense } from '../../store/actions'
import AddExpenseForm from './AddExpenseForm';
import './AddExpense.css';

class AddExpense extends Component {

  onAddExpense = (expense) => {
    addExpense(this.props.dispatch, expense);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.addExpense.expenseAdded) {
      this.props.push('/');
    }
  }

  render() {

    //todo: loading overlay
    //todo: nice error message

    const {expenseBeingAdded, expenseAdded, error, errorMessage} = this.props.addExpense;

    return (
        <div className="add-expense-component">
            <h1>Add expense</h1>

            <div>
              <strong>Adding: </strong> <span>{expenseBeingAdded ? "Yeah Boi": "No Boi"}</span>
            </div>
            
            <div>
              <strong>Added: </strong> <span>{expenseAdded ? "Yeah Boi": "No Boi"}</span>
            </div>

            {error &&
            <div>
              <strong>ERROR: </strong> <span>{errorMessage}</span>
            </div>
            }
            <AddExpenseForm onCreate={this.onAddExpense} />
            
            <Link to="/" className="btn btn-primary back-link"><span className="fa fa-chevron-left"></span> Home</Link>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {addExpense: state.addExpense}
}

export default connect(mapStateToProps)(AddExpense);