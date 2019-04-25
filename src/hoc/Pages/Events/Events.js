import React from "react";
import classes from "./Events.scss";
import Parallax from "../../../components/Parallax/Parallax";
import phImage from "../../../assets/images/ph.jpg";
// import Calendar from "../../../components/Calendar/Calendar";

const pH1 = (
  <h1 className={classes.lightHd}>Upcoming Events</h1>
);


class Events extends React.Component {
  render() {
    return (
      <div className={classes.eventsPage}>
        <Parallax plaxStyle="styleHd" plaxHeadline={pH1} plaxImage={phImage} />
      </div>
    );
  }
}
export default Events;