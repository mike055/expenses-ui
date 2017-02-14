import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div>
            <h1><span className="fa fa-lock"></span> Super secret business</h1>

            <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Login</a>
        </div>
    );
  }
}

export default Login;