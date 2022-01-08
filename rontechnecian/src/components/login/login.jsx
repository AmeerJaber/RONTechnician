import React from 'react';
import fire from '../../config/fire';
import loginImg from '../../login.jpg'

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

  validate = () => {
    let passwordError = "";
    let emailError = "";
    this.state.email = document.getElementById("email").value;
    this.state.password = document.getElementById("password").value;

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.email) {
      emailError = "Please enter an Email";
    }


    if (!this.state.password) {
      passwordError = "Please enter a password";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
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
          <div className="header">Login Page</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="text" id="email" placeholder="email" />
              </div>
              <div>{this.state.emailError}</div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div>{this.state.passwordError}</div>
          <div className="footer">
            <button type="button"onClick={this.handleSubmit} className="btn">
              Login
            </button>
          </div>
        </div>
      );
    }
  }
  export default Login;