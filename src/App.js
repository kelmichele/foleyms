import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/About/About';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        {/* <Route exact={true} path="/" component={Home} /> */}
        <Route path="/about" component={About} />
      </Switch>
    );

    return (
      <div className="App">
        {routes}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <NavLink to="/about">About Us</NavLink>

        </header>

      </div>
    );
  }
}

export default App;
