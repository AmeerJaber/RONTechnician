import React from "react";
import fire from '../../config/fire';
import loginImg from "../../login.jpg";

export class Register extends React.Component {

  signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

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
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button"onClick={this.signUp} className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register