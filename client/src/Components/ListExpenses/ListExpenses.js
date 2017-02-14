import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getExpenses } from '../../store/actions'
import './ListExpenses.css';

class ListExpenses extends Component {

    componentDidMount() {
        getExpenses(this.props.dispatch)
    }

    renderError(errorMessage){
        return ( 
            <div>
              <strong>ERROR: </strong> <span>{errorMessage}</span>
            </div>
        )
    }

    renderLoading(){
        return ( 
            <div>
              <strong>Loading</strong>
            </div>
        )
    }

    renderExpenses(expenses){
        //todo: date formatting

        return ( 
            <div>
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
                    {expenses.map( (expense, index) =>
                        <tr key={expense._id}>
                            <td>{expense.date}</td>
                            <td>${expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>{expense.description}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        const {loading, error, errorMessage, data} = this.props.expenses;

        return (
            <div className="list-expenses-component">
                <h1>Expenses</h1>
                
                {
                    error ? 
                        this.renderError(errorMessage)
                        :
                        loading ?
                            this.renderLoading()
                        :
                            this.renderExpenses(data)
                }


                <Link to="/" className="btn btn-primary back-link"><span className="fa fa-chevron-left"></span> Home</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {expenses: state.listExpenses}
}

export default connect(mapStateToProps)(ListExpenses);