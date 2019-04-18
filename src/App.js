import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
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
// import BuslistingsListLoader from "./BuslistingsListLoader";
// import BuslistingDetailsLoader from "./BuslistingDetailsLoader";

// import Amplify, {API} from 'aws-amplify';
import Amplify, { graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Connect } from 'aws-amplify-react';
Amplify.configure(aws_exports);


function makeComparator(key, order = 'asc') {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (aVal > bVal) comparison = 1;
    if (aVal < bVal) comparison = -1;

    return order === 'desc' ? (comparison * -1) : comparison
  };
}

const ListBuslistings = `query ListBuslistings {
    listBuslistings(limit: 9999) {
        items {
          id
          name
          category
          website
        }
    }
}`;

const GetBuslisting = `query GetBuslisting($id: ID!) {
  getBuslisting(id: $id) {
    id
    name
    category
    website
  }
}
`;
class BuslistingsList extends React.Component {
  buslistingItems() {
    return this.props.buslistings.sort(makeComparator('name')).map(buslisting =>
      <li key={buslisting.id}>
        <NavLink to={`/buslistings/${buslisting.id}`}>{buslisting.name}</NavLink>
      </li>
    );
  }

  render() {
    return (
      <div className={classes.BuslistingsList}>
        <h3>My Buslistings</h3>
        <ul>
          {this.buslistingItems()}
        </ul>
      </div>
    );
  }
}


class BuslistingDetailsLoader extends React.Component {
  render() {
    return (
      <Connect query={graphqlOperation(GetBuslisting, { id: this.props.id })}>
        {({ data, loading }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.getBuslisting) return;

          return <BuslistingDetails buslisting={data.getBuslisting} />;
        }}
      </Connect>
    );
  }
}


class BuslistingDetails extends Component {
  render() {
    return (
      <div className={classes.BuslistingDetails}>
      xxxxxxxxxxxxx
        <h3>HI {this.props.buslisting.name}</h3>
        <p>{this.props.buslisting.category}</p>
        <p>{this.props.buslisting.website}</p>
        
      </div>
    )
  }
}


class BuslistingsListLoader extends React.Component {
  onNewBuslisting = (prevQuery, newData) => {
    // When we get data about a new buslisting, we need to put in into an object 
    // with the same shape as the original query results, but with the new data added as well
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listBuslistings.items = prevQuery.listBuslistings.items.concat([newData.onCreateBuslisting]);
    return updatedQuery;
  }

  render() {
    return (
      <Connect
        query={graphqlOperation(ListBuslistings)}
      >
        {({ data, loading }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.listBuslistings) return;

          return <BuslistingsList buslistings={data.listBuslistings.items} />;
        }}
      </Connect>
    );
  }
}




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
        <Route path="/table" exact component={BuslistingsListLoader} />

        <Route
          path="/buslistings/:buslistingId"
          render={() => <div><NavLink to='/'>Back to Buslistings list</NavLink></div>}
        />
        <Route
          path="/buslistings/:buslistingId"
          render={props => <BuslistingDetailsLoader id={props.match.params.buslistingId} />}
        />
      </Switch>
    );

    return (
      <div className="App">
        <Header />
        <div className={classes.boxedBody}>
          <Content>{routes}</Content>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

