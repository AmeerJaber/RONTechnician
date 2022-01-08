import React from "react";
import fire from '../../config/fire';
import loginImg from "../../login.jpg";
import validator from 'validator';

const initialState={
  username:'',
  email:'',
  password:'',
  usernameError:'',
  emailError:'',
  passwordError:''

}

export class Register extends React.Component {

  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let usernameError = "";
    let passwordError = "";
    let emailError = "";
    this.state.username = document.getElementById("username").value;
    this.state.email = document.getElementById("email").value;
    this.state.password = document.getElementById("password").value;

    if (!this.state.username) {
      usernameError = "Please enter a username";
    }

    if (!validator.isEmail(this.state.email)) {
      emailError = "invalid email";
    }

    if (!this.state.email) {
      emailError = "Please enter an Email";
    }


    if (!this.state.password) {
      passwordError = "Please enter a password";
    }

    if (emailError || passwordError || usernameError) {
      this.setState({ emailError, passwordError,usernameError});
      return false;
    }
    

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
        <div className="header">Register Page</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="username" />
            </div>
            <div style={{ fontSize: 14, color: "red" }}>{this.state.usernameError}</div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="email" />
            </div>
            <div style={{ fontSize: 14, color: "red" }}>{this.state.emailError}</div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: "red" }}>{this.state.passwordError}</div>
        <div className="footer">
          <button type="button"onClick={this.handleSubmit} className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register