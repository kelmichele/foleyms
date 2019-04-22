import React, { Component } from "react";
import classes from "./Home.scss";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import Parallax from "../../../components/Parallax/Parallax";
import bg1 from "../../../assets/images/Plaza.jpg";
// import PhotoCat from "../../../components/PhotoCat/PhotoCat";
import msLogo from "../../../assets/images/msaRedRGB.jpg";

import ImageTextLink from "../../../components/ImageText/ImageTextLink";
// import ItPhoto1 from "../../../assets/images/wLaurel.png";
import Pdf1 from "../../../Mkt-Snapshot2019.pdf";
import Pdf2 from "../../../FoleyFwdPlan_190320.pdf";
import Pdf3 from "../../../foley-map2.pdf";

import ti1 from "../../../assets/images/mm-alfredo.jpg";
import ti2 from "../../../assets/images/modelTrain1b.jpg";
import ti3 from "../../../assets/images/artCenter1.jpg";

import MapImg1 from "../../../assets/images/mapSS.png";
import MapImg2 from "../../../assets/images/mapLegend.jpg";


const plaxHd1 = (
<h1 className={[classes.lightHd, classes.textCenter].join(' ')}>Main Street Foley</h1>
);

// KP * DELETE COLLAGE COMPONENT??

const textContent = (
  <div>  
    <p className={classes.CustomP}>
      Located at the heart of Baldwin County’s busiest intersection, Foley has significant commercial appeal.
      With professional offices sprinkled throughout the Main Street district and newly remodeled vacant buildings,
      this revitalized downtown area is attracting new, diverse buisnesses and potential downtown housing.
    </p>
    <Link to="/listings" className={classes.msLink}>View Available Properties</Link>
  </div>
);

const textContent2 = (
  <div>
    <h3 className={classes.sign}>Preservation. Promotion. Pride.</h3>
    {/* <h3 className={classes.sign}>Preserving Our History</h3> */}
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
          // plaxHeadline={plaxHd1}
          // plaxContent={plaxContent1}
          // bgSize="100%"
          plaxHeight="300px"
        />
       
        {/* Sections: categories, overview/intro, upcoming events, main street */}
        {/* <div className={classes.clearfix} />
        <div className={classes.insideXl}><PhotoCat TopDist="negative" /></div>
        <div className={classes.clearfix} /> */}

        <div className={classes.detsHome}>
          <div className={classes.insideNrw}>
            <h1 className={classes.HomeH1}><span className={classes.TopH1}>Welcome to</span> <br />Historic Downtown <span className={classes.sign}>Foley</span></h1>
            {/* <p className={classes.sign}>Historic Dow ntown Foley</p> */}
            <p className={classes.Xnrw}>
              Just eleven miles north of Alabama’s white sand beaches, Foley’s historic downtown epitomizes old Alabama charm.  
              Historic sites, boutique retailers, and unique restaurants line the walkways of this quaint Main Street, 
              making visitors feel like they’ve stepped back in time.  
            </p>
            <div className={classes.spacer1} />
            <Link to="/about" className={classes.msLink}>Learn More About Foley</Link>
          </div>
        </div>

        <div className={classes.photo4}>
          <div className={classes.inside}>
            <div className={[classes.ServiceBox, classes.Box1].join(' ')}>
              <Link to="/directory" className={classes.SboxTitle}>Eat.</Link>
              <img src={ti1} className={classes.PhotoBox} alt="placeholder alt" />
            </div>

            <div className={[classes.ServiceBox, classes.Box2].join(' ')}>
              <img src={ti2} className={classes.PhotoBox} alt="placeholder alt" />
              <Link to="/directory" className={classes.SboxTitle}>Play.</Link>
            </div>

            <div className={[classes.ServiceBox, classes.Box3].join(' ')}>
              <Link to="/directory" className={classes.SboxTitle}>Explore.</Link>
              <img src={ti3} className={classes.PhotoBox} alt="placeholder alt" />
              <div className={classes.spacer1} />
              {/* <Link to="/directory" className={classes.Plink}>Visit Our Business Directory <span uk-icon="arrow-right"></span></Link> */}
            </div>
          </div>
        </div>

        <div className={classes.JoinRow}>
          <div className={classes.insideNrw}>
            <p className={classes.sign}>Join the Neighborhood</p>
            {textContent}
          </div>
        </div>

        <div className={classes.MsSec} >
          <div className={classes.medDef}>
            <ImageTextLink textContent={textContent2} image={msLogo} alt="" gridType="CustomGridHome" textFloat="textRight" />
          </div>
        </div>
      
        <div className={classes.ImageRow}>
          <div className={classes.med2Def}>
            <div className={classes.Text}>
              <p className={classes.sign}>Take the Walking Tour</p>
              <p>Experience everything our beautiful area has to offer on foot with our Historic Downtown Foley Walking Tour.</p>
              <div className={classes.clearfix} />
              <div className={classes.spacer1} />
              <a href={Pdf3} target="_blank" rel="noopener noreferrer" className={classes.msLink}>
              Download the Map</a>
            </div>

            <div className={classes.Images}>
              <img src={MapImg1} alt="placeholder alt" className={[classes.MapPhoto, classes.Photo1].join(' ')} />
              <img src={MapImg2} alt="placeholder alt" className={[classes.MapPhoto, classes.Photo2].join(' ')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;