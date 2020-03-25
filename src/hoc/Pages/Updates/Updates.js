import React from "react";
import { Helmet } from "react-helmet";
import Aux from "../../../hoc/Aux/Aux";
// import { Link } from "react-router-dom";
const classes = require('./Updates.scss');
const tips = require("../../../COVIDTips.pdf");
// const img = require('../../../assets/images/dogPark2.jpg');
// const textContent0 = (
//   <div>
//     <p></p> 
      // <a href={tips} target="_blank" rel="noopener noreferrer" className={classes.tipLink}></a>
      // <Link to="/listings" className={classes.msLink}>View Available Property <span uk-icon="arrow-right"></span></Link>
//   </div>
// );

const updates = () => {
  return (
    <Aux>
    <Helmet>
      <title>COVID-19 Updates From the Foley Main Street District</title>
      <meta name="description" content="Downtown Foley is home to many restaurants, retail stores, and other businesses. Learn more about everything the Foley Main Street area has to offer." />
      <body className={classes.updatesPage} />
    </Helmet>


    <div className={classes.updatesPage}>
      <div className={classes.updatesHeader}>
        <h1>Foley Main Street COVID-19 Updates</h1>
      </div>
      
        {/* Restaurant updates  
        https://foleymainstreet-739f.gr8.com/ 

        Business Help 
        https://foleymainstreet-00c0.gr8.com/

        Getting Your business OnLine 
        https://foleymainstreet-6a3c.gr8.com/ */}
      
      <div className={[classes.updatesBody, ["uk-grid"]].join(' ')}>
        <div className={classes.med2Def}>
        {/* <a href="https://fmscovidupdates.s3.amazonaws.com/COVID-updates.pdf" target="_blank" rel="noopener noreferrer" className={[classes.upLink, classes.updatesLink].join(' ')}>
          COVID-19 Updates for Foley Main Street Restaurants and Businesses
          <img src="https://fmscovidupdates.s3.amazonaws.com/restaurants.png" alt="FMS Updates" />
        </a> */}
        {/* <div data-uk-lightbox>
          <a className="uk-button uk-button-default" href="https://fmscovidupdates.s3.amazonaws.com/restaurants.png" data-alt="Image">Open Lightbox</a>
        </div> */}
        
        <button uk-toggle="target: #updateModal" type="button" className={[classes.upLink, classes.updatesLink].join(' ')}>COVID-19 Updates for Foley Main Street Restaurants and Businesses</button>
        <div id="updateModal" className={[classes.upModal, "uk-flex-top"].join(' ')} data-uk-modal>
          <div className={[classes.customDialog, "uk-modal-dialog uk-modal-body"].join(' ')}>
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <img src="https://fmscovidupdates.s3.amazonaws.com/restaurants.png" alt="FMS Updates" />
          </div>
        </div>


        <a href={tips} target="_blank" rel="noopener noreferrer" className={[classes.upLink, classes.tipLink].join(' ')}>
          COVID-19 Tips from Main Street Alabama and Foley Main Street
        </a>
        
        </div>
      </div>
    </div>
    </Aux>
  );
};

export default updates;