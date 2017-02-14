import {
  ADD_EXPENSE,
  EXPENSE_WAS_ADDED,
  ADD_EXPENSE_ERROR,
  GET_EXPENSES_START,
  GET_EXPENSES_COMPLETE,
  GET_EXPENSES_ERROR
} from './actions'


export const addExpense = (state = { expenseBeingAdded: false, expenseAdded: false, error: false, errorMessage: null }, action) => {
  if (action.type === ADD_EXPENSE)
    return {
      expenseAdded: false, expenseBeingAdded: true, error: false, errorMessage: null
    }
  if (action.type === EXPENSE_WAS_ADDED)
     return {
      expenseAdded: true, expenseBeingAdded: false, error: false, errorMessage: null
    }
  if (action.type === ADD_EXPENSE_ERROR)
     return {
      expenseAdded: false, expenseBeingAdded: false, error: true, errorMessage: action.errorMessage
    }
  else
    return state
}

export const listExpenses = (state = { data: [], loading: true, error: false, errorMessage: null }, action) => {
  if (action.type === GET_EXPENSES_START)
    return {
      data: [], loading: true, error: false, errorMessage: null
    }
  if (action.type === GET_EXPENSES_COMPLETE)
     return {
      data: action.expenses, loading: false, error: false, errorMessage: null
    }
  if (action.type === GET_EXPENSES_ERROR)
     return {
      data: [], loading: true,  error: true,  errorMessage: action.errorMessage
    }
  else
    return state
}