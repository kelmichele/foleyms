import React from "react";
import classes from "./Listings.scss";
import { Helmet } from "react-helmet";
// import PageHeader from "../../../components/PageHeader/PageHeader";
import phBG from "../../../assets/images/Foley-3016.jpg";
// import phBG from "../../../assets/images/ph.jpg";
import rl1 from "../../../assets/images/sAlston.png";
import rl2 from "../../../assets/images/wLaurel.png";
import rl3 from "../../../assets/images/wLaurel200.png";
import Listing1 from "../../../sAlston222.pdf";
import Listing2 from "../../../wLaurel309.pdf";
import Listing3 from "../../../wLaurel200.pdf";

// sidebar by listings with listing type filter?? links to market snap, town info?

const listings = () => {
  return (
    <div className={classes.listingsPage}>
      <Helmet>
        <title>Available Property in Foley, Al</title>
        <meta name="description" content="Take a look at the properties currently available in the downtown district of Foley. 
              With all of its surrounding history, beautiful scenery, and foot traffic, it is no surprise that businesses of all kinds are attracted to this area." />
      </Helmet>

      <div className={classes.medDef}>
        <div className={classes.intro}>
          <img src={phBG} alt="Downtown Foley sidewalk view" className={classes.imgRel} />

          <div className={classes.intText}>
            <h1>Available Property</h1>
            <p>With all of the history, beautiful scenery, and foot traffic that Foley has to offer, it is no surprise that businesses of all kinds are attracted to the downtown area.
            Take a look at the properties currently available in the downtown district of Foley.
            Select a listing to learn more, and feel free to contact us with questions. </p>
            {/* <p>Listings updated every 6 weeks.</p> */}
          </div>
        </div>
      </div>

      <div className={classes.realList}>
        <div className={classes.inside}>
          <div className={classes.realItem}>
            <a href={Listing1} target="_blank" rel="noopener noreferrer">
              <img src={rl1} alt="Downtown Foley, Alston Street real estate listing" className={classes.imgResponsive} />
              <div className={classes.realTitle}>
                222 S Alston St<br /> Foley, AL 36535<br />
                <span>Commercial Building</span>
              </div>
              </a>
          </div>

          <div className={classes.realItem}>
            <a href={Listing2} target="_blank" rel="noopener noreferrer">
              <img src={rl2} alt="Downtown Foley, Laurel Avenue property listing" className={classes.imgResponsive} />
              <div className={classes.realTitle}>
                309 W Laurel Ave<br /> Foley, AL 36535<br />
                <span>Office Space For Lease</span>
              </div>
            </a>
          </div>

          <div className={classes.realItem}>
            <a href={Listing3} target="_blank" rel="noopener noreferrer">
              <img src={rl3} alt="Downtown Foley, Laurel Avenue real estate listing" className={classes.imgResponsive} />
              <div className={classes.realTitle}>
                200 W Laurel Ave<br /> Foley, AL 36535<br />
                <span>Office Space For Rent</span>
              </div>
            </a>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default listings;

