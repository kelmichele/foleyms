import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import Parallax from "../../../components/Parallax/Parallax";
import phImage from "../../../assets/images/pbRose.jpg";
import { Link } from 'react-router-dom';
// import PageHeader from "../../../components/PageHeader/PageHeader";
const hdLine = (
  <h1 className={classes.lightHd}>Contact Us</h1>
);

const contact = () => {
  return(
    <div className={classes.contactPage}>
      <Helmet>
        <title>Contact Us | Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>
      <Parallax plaxImage={phImage} plaxStyle="styleHd" plaxHeadline={hdLine} />

      <div className={classes.ContactBody}>
        <div className={classes.insideNrw}>
          <div className={classes.LeftSide}>
            <p>The Main Street Foley office is located in the South Baldwin Chamber of Commerce offices.</p>
            <p className={classes.ConInfo}>112 West Laurel Street <br />
              Foley, Al 36535 </p>
            <p className={classes.ConInfo}>251.401.4801</p>
            <p className={classes.ConInfo}>foleymainstreet@gmail.com</p>
          </div>
        </div>

        <div className={classes.med2Def}>
          <div className={classes.RightSide}>
            <Link to="/directory" className={[classes.PhotoBoxLink, classes.tour].join(' ')}>Business Directory</Link>
            <Link to="/board" className={[classes.PhotoBoxLink, classes.board].join(' ')}>Meet the Board</Link>
            <Link to="/listings" className={[classes.PhotoBoxLink, classes.property].join(' ')}>Available Properties</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;