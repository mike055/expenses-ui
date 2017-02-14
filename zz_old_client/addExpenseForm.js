import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {};
  var decimalOnly = /^\s*[1-9]\d*(\.\d{1,2})?\s*$/;
  
  if (!values.amount) {
    errors.amount = 'Required'
  } 
  else if(!decimalOnly.test(values.amount)) {
     errors.amount = 'Not a valid decimal number';
  }
  
  if (!values.category) {
    errors.category = 'Required'
  }
  
  if (!values.date) {
    errors.date = 'Required'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  
  return warnings
}



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group">
      <label>{label}</label>
      <input  className="form-control" {...input} type={type}/>
      {touched && error && <div className="error">{error}</div>}
    </div>
);

const renderSelect =({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <select className="form-control" {...input}>
      <option value="">Select a category...</option>
            {categories.map(category =>
              <option value={category} key={category}>{category}</option>)}
    </select>
    {touched && error && <div className="error">{error}</div>}
  </div>
);

const categories = ['test2', 'other2'];
const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="amount" type="text" component={renderField} label="Amount"/>
      <Field name="category" component={renderSelect} label="Category" />
      <Field name="description" type="text" component={renderField} label="Description"/>
      <Field name="date" type="date" component={renderField} label="Date"/>
      <div>
        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SyncValidationForm)

/*

Groceries
Utilities (gas, water, elec)
Phones (mobiles, internet)
House (rates)
Insurance (health, car, house)

Petrol
Transport
Car expenses
Medical

Childcare
Children stuff
Animal stuff
Mike Stuff
Elle Stuff

-----
Gifts
Donations
Food and Drink
Leisure/Outings 
Sports fees
House Stuff

-----
Other
Other Big expenses

*/