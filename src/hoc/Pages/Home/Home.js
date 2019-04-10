import React, { Component } from "react";
import classes from "./Home.scss";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import Parallax from "../../../components/Parallax/Parallax";
import bg1 from "../../../assets/images/dogPark2.jpg";
import PhotoCat from "../../../components/PhotoCat/PhotoCat";
// import Collage from "../../../components/Collage/Collage";
import msLogo from "../../../assets/images/msaRedRGB.jpg";

import ImageText from "../../../components/ImageText/ImageText";
import ItPhoto1 from "../../../assets/images/wLaurel.png";
import Pdf1 from "../../../Mkt-Snapshot2019.pdf";
import Pdf2 from "../../../FoleyFwdPlan_190320.pdf";


const plaxHd1 = (
<h1 className={[classes.lightHd, classes.textCenter].join(' ')}>Downtown Foley</h1>
);
// const plaxContent1 = (
//   <img src={vf} class={classes.centerBlock} />
// );

const textContent = (
  <div>  
    <p class={classes.CustomP}>
      Located at the heart of Baldwin County’s busiest intersection, Foley has significant commercial appeal.
      With professional offices sprinkled throughout the Main Street district and newly remodeled vacant buildings,
      this revitalized downtown area is attracting new, diverse buisnesses and potential downtown housing.
    </p>
    <Link to="/listings" class={classes.msLink}>View Available Properties</Link>
  </div>
);

const textContent2 = (
  <div>
    <h3 className={classes.gochi}>Preserving Our History</h3>
    <p>With the help of their first ever Main Street Director, Foley is working to implement
    Main Street Alabama’s four-step approach for downtown promotion, economic vitality, and community connectivity.</p>
    <a href={Pdf1} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.inline, classes.invColor].join(' ')}>
    Market Snapshot</a>
    <a href={Pdf2} target="_blank" rel="noopener noreferrer" className={[classes.msLink, classes.inline].join(' ')}>
    Foley Forward Comprehensive Plan</a>
  </div>
);

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
        <div className={classes.insideXl}><PhotoCat TopDist="negative" /></div>
        <div className={classes.clearfix} />


        <div className={classes.detsHome}>
          <div className={classes.insideNrw}>
            <p>
              Just eleven miles north of Alabama’s white sand beaches, Foley’s historic downtown epitomizes old Alabama charm.
              Downtown Foley is home to historic sites, unique restaurants, a variety of retailers and so much more.
              The area captivates visitors and residents alike with its picturesque beauty.
            </p>
            <Link to="/about" class={classes.msLink}>Learn More About Foley</Link>
          </div>
        </div>
        {/* <Collage /> */}

        <div class={classes.insideAlt}>
          <ImageText textContent={textContent} image={ItPhoto1} alt="" addPadd="xtra" textFloat="RelativeBg" />
        </div>

        <div className={classes.clearfix} />
        <div className={classes.spacer5} />
        <div class={classes.medDef}>
          <ImageText textContent={textContent2} image={msLogo} alt="" gridType="CustomGridHome" textFloat="textRight" />
        </div>


        {/* <div className={classes.detsHome}>
          <div className={classes.insideNrw}>
            <p>
              Located at the heart of Baldwin County’s busiest intersection, Foley has significant commercial appeal.
              With professional offices sprinkled throughout the Main Street district and newly remodeled vacant buildings,
              this revitalized downtown area is attracting new, diverse buisnesses and potential downtown housing.
            </p>
            <Link to="/listings" class={classes.msLink}>View Available Properties</Link>
          </div>
        </div> */}



        {/* <p>With the help of their first ever Main Street Director, Foley is working to implement 
          Main Street Alabama’s four-step approach for downtown promotion, economic vitality, and community connectivity.</p> */}
      </div>
    );
  }
}

export default Home;