import React from 'react';
import classes from './Footer.scss';
import Social from '../../hoc/Social/Social';

const footer = () => { 
  return (
    <div className={classes.Footer}>
      <div className={classes.insideAlt}>
        <div className={classes.FooterCol}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Upcoming Events</li>
          </ul>
        </div>

        <div className={classes.FooterCol}>
          <ul>
            <li>Business Directory</li>
            <li>Available Property</li>
            <li>Maps</li>
          </ul>
        </div>

        <div className={classes.FooterCol}>
          <ul>
            <li>City of Foley</li>
            <li>Demographics</li>
            <li>Market Snapshot</li>
            <li>Comprehensive Plan</li>
          </ul>
        </div>

        <div className={classes.FooterCol}>
          <ul>
            <li>Board of Directors</li>
            <li>Revitalization and Beautification Advisory Board</li>
            <li>Foley Historical Commission</li>
          </ul>
        </div>
        <Social />  
      </div>

      {/* <a href="#" className={classes.scrollUp}></a> */}

      {/* <button type="button" className={classes.scrollUp}></button> */}

      <button className={classes.toTop} data-uk-totop data-uk-scroll>
        <span uk-icon="icon: chevron-up" />
      </button>
    </div>
  );
};

export default footer;