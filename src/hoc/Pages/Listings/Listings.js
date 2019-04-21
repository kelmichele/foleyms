import React from "react";
import classes from "./Listings.scss";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phBG from "../../../assets/images/modelTrain1.jpg";
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
      <PageHeader phImage={phBG} ovPacity=".2" hColor="white" pageTitle="Available Property" />

      <div className={classes.intro}>
        <div className={classes.insideNrw}>
          <p>With all of the history and beautiful scenery that Foley has to offer, on top of its prime location and high foot traffic, 
          it is no surprise that businesses of all kinds are attracted to the downtown area.
          Take a look at the properties currently available in Foley.
          Select a listing to learn more, and feel free to contact us with questions. </p>
          {/* <p>Listings updated every 6 weeks.</p> */}
        </div>
      </div>

      <div className={classes.realList}>
        <div className={classes.inside}>
          <div className={classes.realItem}>
            <a href={Listing1} target="_blank" rel="noopener noreferrer">
              <img src={rl1} alt="real estate item" className={classes.imgResponsive} />
              <div className={classes.realTitle}>
                222 S Alston St<br /> Foley, AL 36535<br />
                <span>Commercial Building</span>
              </div>
              </a>
          </div>

          <div className={classes.realItem}>
            <a href={Listing2} target="_blank" rel="noopener noreferrer">
              <img src={rl2} alt="real estate item" className={classes.imgResponsive} />
              <div className={classes.realTitle}>
                309 W Laurel Ave<br /> Foley, AL 36535<br />
                <span>Office Space For Lease</span>
              </div>
            </a>
          </div>

          <div className={classes.realItem}>
            <a href={Listing3} target="_blank" rel="noopener noreferrer">
              <img src={rl3} alt="real estate item" className={classes.imgResponsive} />
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

