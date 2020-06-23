import React from "react";
import { Helmet } from "react-helmet";
import Aux from "../../../hoc/Aux/Aux";
import residentSurvey from "../../../Resident-Consumer-Survey-June2020.pdf";
const classes = require('./About.scss');

const residentConsumerSurvey = () => {
  return (
    <Aux>
    <Helmet>
      <title>Resident & Consumer Survey, June 2020</title>
      <meta name="description" content="These are the results of the resident survey Foley Main Street conducted after the COVID-19 outbreak." />
    </Helmet>


    <div className={classes.ResidentConsumerSurvey}>
      <div className={classes.uhead}>
        <h1>Resident & Consumer Survey</h1>
        <h2><a href={residentSurvey} target="_blank" className={classes.textLink} rel="noopener noreferrer">Click here</a> to view/download survey in a new tab.</h2>
      </div>
    
      <div className={classes.med2Def}>
        <div className={classes.pdfPage}><iframe src={residentSurvey} title="Resident and Consumer Survey" className={classes.pdfContent} /></div>
      </div>
    </div>
    </Aux>
  );
};

export default residentConsumerSurvey;