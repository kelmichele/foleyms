import React, { Component } from 'react';
import classes from "./App.scss";

class BuslistingDetails extends Component {
  render() {
    return (
      <div className={classes.BuslistingDetails}>
        <h3>{this.props.buslisting.name}</h3>
        <p>TODO: Allow photo uploads</p>
        <p>TODO: Show photos for this buslisting</p>
      </div>
    )
  }
}

export default BuslistingDetails;