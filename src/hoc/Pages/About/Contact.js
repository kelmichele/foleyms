import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import Social from "../../Social/Social";
import photo from "../../../assets/images/Foley-3021.jpg";
import MobilePhoto from "../../../assets/images/Foley-3021b.jpg";

const contact = () => {
  return(
    <div className={classes.contactPage}>
      <Helmet>
        <title>Contact Foley Main Street</title>
        <meta name="description" content="The Main Street Foley office is located in the South Baldwin Chamber of Commerce building. Stop by our office, or contact us if you have any questions." />
      </Helmet>

      <div className={classes.ContactBody}>
        <div className={classes.info}>     
          <div className={classes.textSide}>
            <div className={classes.ContInfo}>
              <h1>Contact Us</h1>
              <p className={classes.ConInfo}>The Main Street Foley office is located in the <br /> South Baldwin Chamber of Commerce.</p>
              <div className={classes.ContBorder} />
              <p>112 West Laurel Street <br />Foley, Al 36535 </p>
              <p>251.401.4801</p>
              <p>foleymainstreet@gmail.com</p>
              <div className={classes.ContBorder} />
              <Social />
            </div>
          </div>

          <img src={photo} alt="Foley Chamber of Commerce Office Entrance" className={[classes.infoImg, classes.FullImg].join(' ')} />
          <img src={MobilePhoto} alt="Foley Chamber of Commerce Office and Sign" className={[classes.infoImg, classes.MobileImg].join(' ')} />
        </div>
      </div>
    </div>
  );
}
export default contact;