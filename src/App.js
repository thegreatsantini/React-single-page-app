import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <ul className="navigation">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/not-found">About (old)</NavLink>
          </li>
        </ul>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/' component={NotFound}/>
        </Switch>        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
