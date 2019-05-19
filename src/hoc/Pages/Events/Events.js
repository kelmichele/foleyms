import React from "react";
import classes from "./Events.scss";
import { Helmet } from "react-helmet";
// import PageHeader from "../../../components/PageHeader/PageHeader";
// import phImage from "../../../assets/images/Foley-30Head.jpg";
import phBG from "../../../assets/images/Foley-3046.jpg";

class Events extends React.Component {
  render() {
    return (
      <div className={classes.eventsPage}>
        <Helmet>
          <title>Events Around Foley, Al</title>
          <meta name="description" content="" />
        </Helmet>
        {/* <PageHeader phImage={phImage} ovPacity=".15" hColor="white" pageTitle="Upcoming Events" /> */}

        <div className={classes.EventsHead}>
          <div className={classes.med2Def}>
            <img src={phBG} alt="real estate item" className={classes.imgRel} />

            <div className={classes.intText}>
              <h1>Upcoming Events</h1>
              <p>Don't miss out on all the fun things happening in the Foley area. Select an event from the calendar below for more information. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Events;