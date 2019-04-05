import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
// import PageHeader from "../../../components/PageHeader/PageHeader";
// import Parallax from "../../../components/Parallax/Parallax";
// import phImage from "../../../assets/images/ph.jpg";

const contact = () => {
  return(
    <div className={classes.contactPage}>
      <Helmet>
        <title>Contact Us | Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>

      <div>
        The Main Street office is located in the South Baldwin Chamber of Commerce offices at 112 West Laurel Street in downtown Foley. 
        You may reach the office by calling 251.401.4801 or by email at foleymainstreet@gmail.com.
      </div>
    </div>
  );
}
export default contact;