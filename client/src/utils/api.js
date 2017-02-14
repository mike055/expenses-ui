import { getJSON, postJSON } from './ajax'

const ServerURL = 'http://localhost:3000/api'

export const addExpenseApi = (data, cb) => {
  postJSON(`${ServerURL}/expenses`, data, (error, res) => {
    cb(error, res)
  })
}

export const getExpensesApi = (cb) => {
  getJSON(`${ServerURL}/expenses`, (error, res) => {
    cb(error, res)
  })
}