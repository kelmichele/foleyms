import React, { Component } from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';
import classes from "./App.scss";

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

// React.
class BuslistingsList extends Component {
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

export default BuslistingsList;