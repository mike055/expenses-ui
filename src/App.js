import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom'

import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <h1>People Viewer</h1>
                <Route exact path="/" component={Login}/>
                <Route path="/:anything" component={NotFound}/>
            </div>
        </Router>
    );
  }
}

export default App;