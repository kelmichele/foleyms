import React from "react";
import classes from "./Social.scss";

const social = (props) => {
  return (
    <ul className={[classes.Social, classes[props.Colors]].join(' ')}>
      <li><a href="https://www.facebook.com/VisitFoley" target="_blank" rel="noopener noreferrer">
        <span className={classes.SocialIcon} aria-label="City of Foley Facebook Link" uk-icon="icon: facebook"></span>
      </a></li>

      <li><a href="https://www.instagram.com/visitfoley/" target="_blank" rel="noopener noreferrer">
        <span aria-label="City of Foley Instagram Link" uk-icon="icon: instagram"></span>
      </a></li>

      <li><a href="https://twitter.com/visitfoley" target="_blank" rel="noopener noreferrer">
        <span aria-label="City of Foley Twitter Link" uk-icon="icon: twitter"></span>
      </a></li>

      <li><a href="https://www.youtube.com/user/visitfoleyal" target="_blank" rel="noopener noreferrer">
        <span aria-label="City of Foley Youtube Link" uk-icon="icon: youtube"></span>
      </a></li>

      <li><a href="https://plus.google.com/u/0/105767559681129662096" target="_blank" rel="noopener noreferrer">
        <span aria-label="City of Foley Google Plus Link" uk-icon="icon: google-plus"></span>
      </a></li>
    </ul>
  );
};

export default social;
