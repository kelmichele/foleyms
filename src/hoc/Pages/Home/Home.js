import React, { Component } from "react";
import classes from "./Home.scss";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import Parallax from "../../../components/Parallax/Parallax";
// import bg1 from "../../../assets/images/TEMPdowntown-foley.jpg";
import bg1 from "../../../assets/images/dogPark2.jpg";

const plaxHd1 = (
<h1 className={[classes.lightHd, classes.textCenter].join(' ')}>Downtown Foley</h1>
);
// const plaxContent1 = (
//   <img src={vf} class={classes.centerBlock} />
// );


class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Parallax
          plaxImage={bg1}
          // plaxShadow="true"
          plaxHeadline={plaxHd1}
          // plaxContent={plaxContent1}
          // bgSize="100%"
          plaxHeight="300px"
        />
       
        {/* Sections: categories, overview/intro, upcoming events, main street */}
        <div className={classes.clearfix} />
        <div className={classes.detsHome}>
          <div className={classes.insideNrw}>
            <p>
              Just eleven miles north of Alabama’s white sand beaches, Foley’s historic downtown epitomizes old Alabama charm.
              Downtown Foley is home to historic sites, unique restaurants, a variety of retailers and so much more.
              The area captivates visitors and residents alike with its picturesque beauty.
            </p>
          </div>
        </div>

        <div className={classes.serviceRow}>
          <div className={[classes.ServiceBox, classes.Box1].join(' ')}>
            {/* <a href={} className={classes.SboxTitle}>Dining</a> */}
            <Link to="/directory#Dining" className={classes.SboxTitle}>Dining</Link>
          </div>

          <div className={[classes.ServiceBox, classes.Box2].join(' ')}>
            {/* <div className={classes.SboxTitle}>Shopping</div> */}
            <Link to="/directory#Shopping" className={classes.SboxTitle}>Shopping</Link>
          </div>

          <div className={[classes.ServiceBox, classes.Box3].join(' ')}>
            {/* <div className={classes.SboxTitle}>Services</div> */}
            <Link to="/directory#Services" className={classes.SboxTitle}>Services</Link>
          </div>

          <div className={[classes.ServiceBox, classes.Box4].join(' ')}>
            {/* <div className={classes.SboxTitle}>Misc.</div> */}
            <Link to="/directory#Misc" className={classes.SboxTitle}>Misc</Link>
          </div>
        </div>

        <div className={classes.detsHome}>
          <div className={classes.insideNrw}>
            <p>
              Located at the heart of Baldwin County’s busiest intersection, Foley has significant commercial appeal.
              With professional offices sprinkled throughout the Main Street district and newly remodeled vacant buildings,
              this revitalized downtown area is attracting new, diverse buisnesses and potential downtown housing.
            </p>
            <Link to="/listings">Check out our available properties</Link>
          </div>
        </div>







          {/* 


            Among its traditional architecture and old-world style, 
            downtown Foley features restaurants, gift shops, barbershops, antique markets and even a hidden spa for unwinding after a long day of shopping
            Foley captivates visitors and residents alike with its picturesque beauty. 
            The newly remodeled vacant buildings and downtown revitalization add to this area’s appeal, 
            attracting new, diverse businesses and potential downtown housing. 
            Professional offices are sprinkled among the Main Street district,
            popular lunch destination due to its eclectic cuisine options, including Mediterranean, Italian, vegan, and Southern-style restaurants
            Quaint coffee shops and local art shops can also be found in this charming area.

            Brimming with history, downtown Foley is home to two city museums housed in their original, historic buildings, 
            an “old time” soda fountain drugstore that has donned the same corner since 1929. 
            The Holmes Medical Museum is housed in Baldwin County’s first hospital, and showcases extensive displays of medical equipment and patient rooms as 
              they would have been in the 1930s and ’40s. 
            The Foley Railroad Museum includes a model train exhibit, antique train cars, and train rides around the park. 
              It is housed in the Depot, which was built in 1909, and has been the hub of activity in the City for over 60 years. 

            Downtown Foley is also home to the Wilbourne Antique Rose Trail, which follows the route of the Louisville and Nashville Railroad into downtown Foley. 
              You can walk the landscaped trail while enjoying the beauty and fragrance of hundreds of roses displayed in a variety of sizes and color. 

            Located at the heart of Baldwin County’s busiest intersection, with an average of forty-thousand cars per day, Foley has significant commercial appeal, 
              especially with its newly built pedestrian bridge connecting the shops of downtown with the park and city buildings allowing accessibility and walkability  */}
      </div>
    );
  }
}

export default Home;