import React from 'react';
import loginImg from '../../login.jpg'
import validator from 'validator';
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
import { auth } from "../../config/fire";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const initialState={
  email:'',
  password:'',
  emailError:'',
  passwordError:''

}

export class Login extends React.Component {

  state = initialState;


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  login = async () => {
    try {
      const user= await signInWithEmailAndPassword(auth, this.state.email, this.state.password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  validate = () => {
    let passwordError = "";
    let emailError = "";
    this.state.email = document.getElementById("email").value;
    this.state.password = document.getElementById("password").value;

    if (!validator.isEmail(this.state.email)) {
      emailError = "invalid email";
    }

    if (!this.state.email) {
      emailError = "Please enter an Email";
    }

    if (this.state.password.length < 8 ||  this.state.password.length > 20) {
      passwordError = "Password lenth must be from 8 to 20";
    }

    if (!this.state.password) {
      passwordError = "Please enter a password";
    }


    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    this.login();
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login Page</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="email" />
              </div>
              <div style={{ fontSize: 14, color: "red" }}>{this.state.emailError}</div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div style={{ fontSize: 14, color: "red" }}>{this.state.passwordError}</div>
          <div className="footer">
            <button type="button" onClick={this.handleSubmit} className="btn">
              Login
            </button>
          </div>
        </div>
      );
    }
  }
  export default Login;