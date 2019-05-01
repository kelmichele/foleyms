import React, { Component } from "react";
// import Parallax from "../../components/Parallax/Parallax";
import classes from "../../App.scss";



class Calendar extends Component {
  render() {
    return (
      <div className={classes.med2Def}>
        <div
          data-tockify-component="calendar"
          data-tockify-calendar="foley.downtown"
        />
      </div>
    );
  }
}
export default Calendar;