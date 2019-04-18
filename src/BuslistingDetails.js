import React, { Component } from 'react';
import classes from "./App.scss";


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
export default BuslistingDetails;