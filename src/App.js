import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import classes from './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./hoc/Content/Content";
import Home from "./hoc/Pages/Home/Home";
import About from "./hoc/Pages/About/About";
import Board from "./hoc/Pages/About/Board";
import Contact from "./hoc/Pages/About/Contact";
import Events from "./hoc/Pages/Events/Events";
import Listings from "./hoc/Pages/Listings/Listings";
import Directory from "./hoc/Pages/Directory/Directory";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/board" component={Board} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} />
        <Route path="/listings" component={Listings} />
        <Route path="/directory" component={Directory} />
      </Switch>
    );

    return (
      <div className="App">
        <Header />
        <Content>{routes}</Content>

        <div className={classes.inside}>
          <button onClick={this.post}>POST</button>
          <button onClick={this.get}>GET</button>
          <button onClick={this.list}>LIST</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
