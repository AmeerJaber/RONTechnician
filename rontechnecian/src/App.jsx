import React from "react";
import "./App.scss";
import fire from './config/fire';
import Home from'./Home.jsx';
import About from'./About.jsx';
import { Login, Register } from "./components/login/index";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home </Link>

        <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;