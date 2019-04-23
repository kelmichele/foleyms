import React from "react";
import classes from "./Events.scss";
import Parallax from "../../../components/Parallax/Parallax";
import phImage from "../../../assets/images/ph.jpg";
// import Calendar from "../../../components/Calendar/Calendar";

const pH1 = (
  <h1 className={classes.lightHd}>Upcoming Events</h1>
);

const events = () => {
  return (
    <div className={classes.eventsPage}>
      <Parallax plaxStyle="styleHd" plaxHeadline={pH1} plaxImage={phImage} />
      
      <div className={classes.inside}>
        {/* <Calendar /> */}
        <div
          data-tockify-component="calendar"
          data-tockify-calendar="foley.downtown"
        />
        
      </div>
    </div>
  );
};

export default events;