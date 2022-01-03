import React from 'react';
import fire from '../../config/fire';
import loginImg from '../../login.jpg'

export class Login extends React.Component {

    login() {
      const email = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
      fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
          console.log('Successfully Logged In');
        })
        .catch((err) => {
          console.log('Error: ' + err.toString());
        })
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button"onClick={this.login} className="btn">
              Login
            </button>
          </div>
        </div>
      );
    }
  }
  export default Login;