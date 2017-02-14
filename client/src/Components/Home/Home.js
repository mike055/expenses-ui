import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className="home-component">
            <h1>What do you want to do?</h1>

            <Link to="addExpense" className="btn btn-primary home-action"><span className="fa fa-usd"></span> Add expense</Link>
            <Link to="expenses" className="btn btn-primary home-action"><span className="fa fa-line-chart"></span> Review expenses</Link>
            <Link to="upload" className="btn btn-primary home-action"><span className="fa fa-upload"></span> Upload document</Link>
        </div>
    );
  }
}

export default Home;