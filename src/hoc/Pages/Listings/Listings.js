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

      <PageHeader phImage={phBG} ovPacity=".5" hColor="white" pageTitle="Available Property" />

      {/* <p>Just eleven miles north of Alabama’s white sand beaches, Foley’s historic downtown epitomizes old Alabama charm.  Historic sites, boutique retailers and unique restaurants line the walkways of this quaint Main Street making visitors feel like they’ve stepped back in time.  </p>
      <p>Among its traditional architecture and old-world style, downtown Foley features restaurants, gift shops, barbershops, antique markets and even a hidden spa for unwinding after a long day of shopping.  With beautiful flowers dotting intersections, a streetlight lined seven-acre park, and the colorful hanging floral baskets, Foley captivates visitors and residents alike with its picturesque beauty.   The newly remodeled vacant buildings and downtown revitalization add to this area’s appeal thus attracting a plethora of new, diverse businesses and potential downtown housing.  Professional offices are sprinkled among the Main Street district offering conveniences to the nearby residents.  It has also become a popular lunch destination due to its eclectic cuisine options including Mediterranean, Italian, vegan, and Southern-style restaurants all within a stone’s throw of one another. Quaint coffee shops and local art shops can also be found in this charming area.</p>
      <p>Brimming with history, downtown Foley is home to two city museums housed in their original, historic buildings and an “old time” soda fountain drugstore that has donned the same corner since 1929.  The Holmes Medical Museum is housed in Baldwin County’s first hospital and showcases extensive displays of medical equipment and patient rooms as they would have been in the 1930s and ’40s. The Foley Railroad Museum includes a model train exhibit, antique train cars and train rides around the park. It is housed in the Depot which was built in 1909 and has been the hub of activity in the City for over 60 years. </p>
      <p>Downtown Foley is also home to the Wilbourne Antique Rose Trail which follows the route of the Louisville and Nashville Railroad into downtown Foley. You can walk the landscaped trail while enjoying the beauty and fragrance of hundreds of roses displayed in a variety of sizes and color. </p>
      <p>Located at the heart of Baldwin County’s busiest intersection with an average of forty-thousand cars per day, Foley has significant commercial appeal, especially with its newly built pedestrian bridge connecting the shops of downtown with the park and city buildings allowing accessibility and walkability for visitors and residents alike.</p> */}

      <div className={classes.intro}>
        <div className={classes.insideNrw}>
          <p>Located at the heart of Baldwin County’s busiest intersection, with an average of forty-thousand cars per day, Foley has 
            significant commercial appeal, especially with its newly built pedestrian bridge connecting the shops of downtown with the 
            park and city buildings allowing accessibility and walkability.
          </p>
        </div>
      </div>

      <div className={classes.realList}>
        <div className={classes.inside}>
          <div className={classes.realItem}>
            <a href={Listing1} target="_blank" rel="noopener noreferrer">
              <img src={rl1} alt="real estate item" class={classes.imgResponsive} />
              <div className={classes.realTitle}>
                222 S Alston St<br /> Foley, AL 36535<br />
                <span>Commercial Building</span>
              </div>
              </a>
          </div>

          <div className={classes.realItem}>
            <a href={Listing2} target="_blank" rel="noopener noreferrer">
              <img src={rl2} alt="real estate item" class={classes.imgResponsive} />
              <div className={classes.realTitle}>
                309 W Laurel Ave<br /> Foley, AL 36535<br />
                <span>Office Space For Lease</span>
              </div>
            </a>
          </div>

          <div className={classes.realItem}>
            <a href={Listing3} target="_blank" rel="noopener noreferrer">
              <img src={rl3} alt="real estate item" class={classes.imgResponsive} />
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

