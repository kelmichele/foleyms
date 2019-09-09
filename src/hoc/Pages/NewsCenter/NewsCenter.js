import React from 'react';
import classes from "./NewsCenter.scss";
import { Helmet } from "react-helmet";
// import stack2b from "../../../assets/images/outdoor-jazz.jpg";

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
        <div className={classes.med2Def}>
          <div className={classes.PostCats}>
            <ul className={classes.Cats}>
              <li><a href="https://foleymainstreet.com/news-center?c=blog-post">Blog Posts</a></li>
              <li><a href="https://foleymainstreet.com/news-center?c=newsletters">Newsletters</a></li>
              <li><a href="https://foleymainstreet.com/news-center?c=press-release">Press Releases</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )  
};

export default newsCenter;