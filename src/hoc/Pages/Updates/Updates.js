import React from "react";
import { Helmet } from "react-helmet";
import Aux from "../../../hoc/Aux/Aux";
// import { Link } from "react-router-dom";
const classes = require('./Updates.scss');

const updates = () => {
  return (
    <Aux>
    <Helmet>
      <title>COVID-19 Updates From the Foley Main Street District</title>
      <meta name="description" content="Foley Main Street is committed to keeping our residents and businesses safe and informed during the COVID-19 outbreak." />
      <body className={classes.updatesPage} />
    </Helmet>


    <div className={classes.updatesPage}>
      <div className={classes.uhead}>
        <h1>Foley Main Street <br/> COVID-19 Updates &amp; Information</h1>
      </div>
      
      <div className={classes.updatesBody}>
        <div className={classes.med2Def}>
       
          <div className={classes.ocLinks}>
            {/* <Link to="/sbdc-updates" className={classes.covLinks}>4/7/2020 SBDC Updates</Link> */}
            <a href="https://foleymainstreet-739f.gr8.com/" target="_blank" rel="noopener noreferrer" className={classes.covLinks}>Restaurant Updates  </a>
            <a href="https://foleymainstreet-3d5c.gr8.com/" target="_blank" rel="noopener noreferrer" className={classes.covLinks}>Business Help </a>
            <a href="https://foleymainstreet-6a3c.gr8.com/" target="_blank" rel="noopener noreferrer" className={classes.covLinks}>Get Your Business Online </a>
          </div>
        
        </div>
      </div>
    </div>
    </Aux>
  );
};

export default updates;