import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import Social from "../../Social/Social";
// import PageHeader from "../../../components/PageHeader/PageHeader";
// import phBG from "../../../assets/images/Foley-3016.jpg";
import photo from "../../../assets/images/Foley-3021.jpg";
import MobilePhoto from "../../../assets/images/Foley-3021b.jpg";

const contact = () => {
  return(
    <div className={classes.contactPage}>
      <Helmet>
        <title>Contact Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>
      {/* <PageHeader phImage={phBG} ovPacity=".25" hColor="white" pageTitle="Contact Us" /> */}

      <div className={classes.ContactBody}>
        <div className={classes.info}>         
          <div className={classes.textSide}>
            <div className={classes.ContInfo}>
              <h1>Contact Us</h1>
              {/* <div className={classes.ContBorder} /> */}
              <p className={classes.ConInfo}>The Main Street Foley office is located in the <br /> South Baldwin Chamber of Commerce offices.</p>
              <div className={classes.ContBorder} />
              <p>112 West Laurel Street <br />Foley, Al 36535 </p>
              <p>251.401.4801</p>
              <p>foleymainstreet@gmail.com</p>
              <div className={classes.ContBorder} />
              <Social />
            </div>
          </div>

          <img src={photo} alt="placeholder" className={[classes.infoImg, classes.FullImg].join(' ')} />
          <img src={MobilePhoto} alt="placeholder" className={[classes.infoImg, classes.MobileImg].join(' ')} />
        </div>
      </div>
    </div>
  );
}
export default contact;