import React from 'react';
import classes from "./NewsCenter.scss";
import { Helmet } from "react-helmet";
import stack2b from "../../../assets/images/outdoor-jazz.jpg";

const newsCenter = () => {
  return (
    <div className={classes.newsCenter}>
      <Helmet>
        <title>Latest News</title>
        <meta name="description" content="" />
      </Helmet>
      
      <div className={classes.NewsHead}>
        <div className={classes.MedEvent}>
          <img src={stack2b} alt="Musicians playing outdoor concert" className={classes.imgRel} />
          <div className={classes.intText}>
            <h1>Foley Main Street<br /> News Center</h1>
          </div>
        </div>
      </div>
      
      <div className={classes.NewsBody}>
        <div className={classes.med2Def}>
          <div id="dib-categories" className={classes.PostCats}></div>
          <div id="dib-posts" className={classes.PostGrid}></div>
        </div>
      </div>
    </div>
  )  
};

export default newsCenter;