import React from "react";
import classes from "./Events.scss";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phImage from "../../../assets/images/Foley-30Head.jpg";

class Events extends React.Component {
  render() {
    return (
      <div className={classes.eventsPage}>
        <Helmet>
          <title>Events Around Foley, Al</title>
          <meta name="description" content="" />
        </Helmet>
        <PageHeader phImage={phImage} ovPacity=".15" hColor="white" pageTitle="Upcoming Events" />

      </div>
    );
  }
}
export default Events;