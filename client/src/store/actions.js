export const ADD_EXPENSE = 'ADD_EXPENSE'
export const EXPENSE_WAS_ADDED = 'EXPENSE_WAS_ADDED'
export const ADD_EXPENSE_ERROR = 'ADD_EXPENSE_ERROR'

import { addExpenseApi } from '../utils/api'

export const addExpense = (dispatch, expense) => {
  dispatch({ type: ADD_EXPENSE, expense })
  
  addExpenseApi(expense, (error, result) => {
    if(error) {
      dispatch({
        type: ADD_EXPENSE_ERROR,
        errorMessage: error.message
      })
    }
    else {
      dispatch({
        type: EXPENSE_WAS_ADDED,
        result
      })
    }
  })
}

export const GET_EXPENSES_START = 'GET_EXPENSES_START'
export const GET_EXPENSES_COMPLETE = 'GET_EXPENSES_COMPLETE'
export const GET_EXPESES_ERROR = 'GET_EXPESES_ERROR'

import { getExpensesApi } from '../utils/api'

export const getExpenses = (dispatch) => {
  dispatch({ type: GET_EXPENSES_START })
  
  getExpensesApi((error, result) => {

    if(error) {
      dispatch({
        type: GET_EXPESES_ERROR,
        errorMessage: error.message
      })
    }
    else {
      dispatch({
        type: GET_EXPENSES_COMPLETE,
        expenses: result
      })
    }
  })
}