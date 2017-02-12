import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import $http from "./ajax";

const reducers = {
  // ... your other reducers here ...
  form: reduxFormReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)


const showResults = values =>
  new Promise(resolve => {
    
    $http.ajaxPost('/add', JSON.stringify(values, null, 2))
      .then((r) => {
        var response = JSON.parse(r);
        window.location = response.redirectTo;
      })
      .catch(function(error) { throw new Error(error); });

    /*
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
    */
  })


let render = () => {
  const SyncValidationForm = require('./addExpenseForm').default;
  
  ReactDOM.render(
    <Provider store={store}>
       <SyncValidationForm onSubmit={showResults}/>
    </Provider>,
    document.getElementById('addExpensePage')
  )
}

render();