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

import List from "./List";
import Details from "./Details";

import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);
// let apiName = 'downtown';
// let path = '/items';



class App extends Component {
  // componentDidMount() {
  //   API.get(apiName, path).then(response => {
  //     console.log(response)
  //   });
  // }

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      category: "",
      name: "",
      website: "",
      list: [],
      item: {},
      showDetails: false
    };
  }
  async componentDidMount() {
    await this.fetchList();
  }
  handleChange = event => {
    const id = event.target.id;
    this.setState({ [id]: event.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    await API.post("downtown", "/items", {
      body: {
        // id: Date.now().toString(),
        id: this.state.id,
        name: this.state.name,
        category: this.state.category,
        website: this.state.website
      }
    });
    this.setState({ id: "", category: "", name: "", website: "" });
    this.fetchList();
  };
  async fetchList() {
    const response = await API.get("downtown", "/items");
    this.setState({ list: [...response] });
  }
  loadDetailsPage = async id => {
    const response = await API.get("downtown", "/items/" + id);
    this.setState({ item: { ...response }, showDetails: true });
  };
  loadListPage = () => {
    this.setState({ showDetails: false });
  };
  delete = async id => {
    //TODO: Implement functionality
  };



  

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
        <div className={classes.boxedBody}>
          <Content>{routes}</Content>
        </div>

        <div className={classes.inside} style={{display:'none'}}>
            <form onSubmit={this.handleSubmit}>
              <legend>Add</legend>
             
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="id"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <textarea
                  className="form-control"
                  id="category"
                  placeholder="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="website"
                  value={this.state.website}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr />
            {this.state.showDetails ? (
              <Details
                item={this.state.item}
                loadListPage={this.loadListPage}
                delete={this.delete}
              />
            ) : (
                <List list={this.state.list} loadDetailsPage={this.loadDetailsPage} />
              )}
          </div>
        {/* <div className={classes.inside}>
          <button onClick={this.post}>POST</button>
          <button onClick={this.get}>GET</button>
          <button onClick={this.list}>LIST</button>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default App;
