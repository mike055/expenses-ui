import React, { Component } from 'react';
import { 
    HashRouter as Router, 
    Route,
    Switch
} from 'react-router-dom'

import Home from './Components/Home/Home'
import AddExpense from './Components/AddExpense/AddExpense'
import ListExpenses from './Components/ListExpenses/ListExpenses'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/addExpense" component={AddExpense}/>
                    <Route exact path="/expenses" component={ListExpenses}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route path="/:anything" component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;