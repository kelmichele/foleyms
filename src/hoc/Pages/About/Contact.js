import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import Social from "../../Social/Social";
// import Parallax from "../../../components/Parallax/Parallax";
// import phImage from "../../../assets/images/Foley-3000.jpg";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phBG from "../../../assets/images/downtown1.jpg";
import photo from "../../../assets/images/Foley-3021.jpg";
// import { Link } from 'react-router-dom';
// import PageHeader from "../../../components/PageHeader/PageHeader";
// const hdLine = (
//   <h1 className={classes.lightHd}>Contact Us</h1>
// );

const contact = () => {
  return(
    <div className={classes.contactPage}>
      <Helmet>
        <title>Contact Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>
      <PageHeader phImage={phBG} ovPacity=".25" hColor="white" pageTitle="Contact Us" />
      {/* <Parallax plaxImage={phImage} plaxStyle="styleHd" plaxHeadline={hdLine} /> */}
 
      <div className={classes.ContactBody}>


        <div className={classes.info}>         
          <div className={classes.textSide}>
            <div className={classes.ContInfo}>
              <p className={classes.ConInfo}>The Main Street Foley office is located in the <br /> South Baldwin Chamber of Commerce offices.</p>
              <div className={classes.ContBorder} />
              <p>112 West Laurel Street <br />Foley, Al 36535 </p>
              <p>251.401.4801</p>
              <p>foleymainstreet@gmail.com</p>
              <div className={classes.ContBorder} />
              <Social />
            </div>
          </div>

          <img src={photo} alt="placeholder" class={classes.infoImg} />
        </div>






        {/* <div className={classes.med2Def}>
          <div className={classes.LeftSide}>
            <p>The Main Street Foley office is located in the South Baldwin Chamber of Commerce offices.</p>
            <p className={classes.ConInfo}>112 West Laurel Street <br />
              Foley, Al 36535 </p>
            <p className={classes.ConInfo}>251.401.4801</p>
            <p className={classes.ConInfo}>foleymainstreet@gmail.com</p>
            
            <div className={classes.InLeft}>
              <Link to="/directory" className={[classes.PhotoBoxLink, classes.tour].join(' ')}>Business Directory</Link>
              <Link to="/listings" className={[classes.PhotoBoxLink, classes.property].join(' ')}>Available Properties</Link>
            </div>
          </div>

          <div className={classes.CalSide}>
            <div data-tockify-component="mini" data-tockify-calendar="foley.downtown"></div>
            <div className={[classes.PhotoBoxLink, classes.event].join(' ')}> 
              Select any underlined date for event details.<br /> <Link to="/events">Click here</Link> to see all upcoming events.
            </div>
          </div>
        </div>
           */}



        {/* <div className={classes.med2Def}>
          <div className={classes.TopHlf}>
            <Link to="/directory" className={[classes.PhotoBoxLink, classes.tour].join(' ')}>
              <span>Business Directory</span>
            </Link>
            
            <div className={classes.ContInfo}><p>The Main Street Foley office is located in the South Baldwin Chamber of Commerce offices.</p></div>
            
            <Link to="/listings" className={[classes.PhotoBoxLink, classes.property].join(' ')}>
              <span>Available Properties</span>
            </Link>
          </div>

          <div className={classes.BtmHlf}>
            <div className={classes.ContInfo}>
              <p className={classes.ConInfo}>112 West Laurel Street <br />Foley, Al 36535 </p>
              <p className={classes.ConInfo}>251.401.4801</p>
            </div>
            
            <Link to="/events" className={[classes.PhotoBoxLink, classes.events].join(' ')}><span>Upcoming Events</span></Link>
            
            <div className={classes.ContInfo}>
              <p className={classes.ConInfo}>foleymainstreet@gmail.com</p>
              <Social />
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
export default contact;