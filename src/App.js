import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(){
    super();
    this.state = {form: 'login', message: 'New user? Click here to register.'};

    this.changeFormToRegister = this.changeFormToRegister.bind(this);
    this.changeFormToLogin = this.changeFormToLogin.bind(this);
  }
  changeFormToRegister(event){
    event.preventDefault();
    this.setState({form: 'register', message: 'I am already a user'});
    console.log(this.state.form);
  }
  changeFormToLogin(){
    this.setState({form: 'login', message: 'New user? Click here to register.'}); 
  }
  render() {
    return ( 
      <div className="loginContainer">
          <div className="container">
            <h3>Patient Consultation Information System</h3>
            <p>ELIZABETH D. SERRA SANTOS, M.D., FPCP</p>
            <br />
            <br />
            <LoginForm form={this.state.form} />
            {this.state.form === 'login' &&
                <button className="btn btn-block" onClick={this.changeFormToRegister}>{this.state.message}</button>
            }
            {this.state.form === 'register' &&
                <button className="btn btn-block" onClick={this.changeFormToLogin}>{this.state.message}</button>
            }
          </div>
      </div>
    );
  }
}

export default App;
