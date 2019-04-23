import React, { Component } from 'react';
import classes from "./Buslisting.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import phBG from "../../assets/images/TEMPgads.jpg";

class BuslistingDetails extends Component {
  render() {
    return (
      <div className={classes.BuslistingDetails}>
        <PageHeader phImage={phBG} ovPacity=".4" hColor="white" pageTitle={this.props.buslisting.name} Pos="center" />

        <div className={classes.med2Def}>
          <h3>{this.props.buslisting.name}</h3>
          <p>{this.props.buslisting.category}</p>
          <a href={this.props.buslisting.website} target="_blank" rel="noopener noreferrer">
          Website
          </a>
        </div>
      </div>
    )
  }
}
export default BuslistingDetails;