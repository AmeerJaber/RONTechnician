import React from "react";
import "./App.scss";
import fire from './config/fire';
import Home from'./Home.jsx';
import About from'./About.jsx';
import LogForm from'./LogForm.jsx';
import { Login, Register } from "./components/login/index";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap';


const App = () => {
  return (
    <Router>
      <div>
      <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#" style={{marginRight: 80 }}>RonTechnician</Navbar.Brand>
      <Nav className="me-auto">
        <Link style={{ textDecoration: 'none',marginRight: 30, color: 'white' }} to="/">Home </Link>
        <Link style={{ textDecoration: 'none',marginRight: 30, color: 'white' }} to="/about">About </Link>

        <Link style={{ textDecoration: 'none',marginRight: 30, color: 'white' }} to="/logform">LogIn/Register </Link>
        </Nav>
        </Container>
        </Navbar>
      </div>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/logform" exact>
          <LogForm />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;