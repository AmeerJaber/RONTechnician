import React from "react";
import "./App.scss";
import fire from './config/fire';
import Home from'./Home.jsx';
import About from'./About.jsx';
import LogForm from'./LogForm.jsx';
import { Login, Register } from "./components/login/index";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home </Link>

        <Link to="/about">About </Link>

        <Link to="/logform">LogIn/Register </Link>
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