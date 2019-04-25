import React, { Component } from "react";
// import Parallax from "../../components/Parallax/Parallax";
// import phImage from "../../assets/images/ph.jpg";
import classes from "../../App.scss";



class Calendar extends Component {
  render() {
    return (
      <div className={classes.med2Def}>
        {/* <Parallax plaxStyle="styleHd" plaxHeadline="Calendar" plaxImage={phImage} /> */}
        <div
          data-tockify-component="calendar"
          data-tockify-calendar="foley.downtown"
        />
      </div>
    );
  }
}
export default Calendar;