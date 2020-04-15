import React from 'react';
import classes from "./NewsCenter.scss";
import { Helmet } from "react-helmet";
import NewsPosts from "../../../components/NewsPosts/NewsPosts";

const newsCenter = () => {
  return (
    <div className={classes.NewsCenter}>
      <Helmet>
        <title>Latest News</title>
        <meta name="description" content="See all the latest news, press releases, and blogs from Foley Main Street." />
      </Helmet>
      
      <div className={classes.NewsHead}>
        <h1 className={classes.textCenter}>Foley Main Street News Center</h1>
      </div>
      
      <div className={classes.NewsBody}>
        <NewsPosts /> 
      </div>
    </div>
  )  
};

export default newsCenter;