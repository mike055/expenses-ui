import React, { Component } from 'react';
import './AddExpenseForm.css';
import serializeForm from 'form-serialize'

class AddExpenseForm extends Component {
  
    handleSubmit = (event) => {
        event.preventDefault()

        //todo: validation

        const expense = serializeForm(event.target, { hash: true })
        this.props.onCreate(expense)
        event.target.reset()
    }

    renderTextField(label, type, name) {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input  className="form-control" type={type} name={name}/>
            </div>
        )
    }

    renderSelect (label, name) {
        const categories = ['test2', 'other2'];

        return (
            <div className="form-group">
                <label>{label}</label>
                <select className="form-control" name={name}>
                <option value="">Select a category...</option>
                        {categories.map(category =>
                        <option value={category} key={category}>{category}</option>)}
                </select>
            </div>
        )};
  
  render() {
    return (
        <div className="add-expense-component">
            <form onSubmit={this.handleSubmit}>

                {this.renderTextField("Amount", "text", "amount")}
                {this.renderSelect("Category", "category")}                
                {this.renderTextField("Description", "text", "description")}
                {this.renderTextField("Date", "date", "date")}

                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
  }
}

export default AddExpenseForm;