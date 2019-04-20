import React from 'react';
import classes from './Footer.scss';
import Social from '../../hoc/Social/Social';
import { Link } from 'react-router-dom';
import Pdf1 from "../../Mkt-Snapshot2019.pdf";
import Pdf2 from "../../FoleyFwdPlan_190320.pdf";

const footer = () => { 
  return (
    <div className={classes.Footer}>
      <div className={classes.insideAlt}>
        <div className={classes.FooterCol}>
          <ul>
            <li><Link to="/" className={classes.NavigationItems}>Home</Link></li>
            <li><Link to="/directory" className={classes.NavigationItems}>Business Directory</Link></li>
            <li><Link to="/listings" className={classes.NavigationItems}>Available Property</Link></li>
          </ul>
        </div>

        <div className={classes.FooterCol}>
          <ul>
            <li><Link to="/about" className={classes.NavigationItems}>About Us</Link></li>
            <li><Link to="/events" className={classes.NavigationItems}>Upcoming Events</Link></li>
            <li><Link to="/board" className={classes.NavigationItems}>Board of Directors</Link></li>
            <li><Link to="/contact" className={classes.NavigationItems}>Contact</Link></li>
          </ul>
        </div>

        <div className={classes.FooterCol}>
          <ul>
            <li><a href="https://cityoffoley.org/demographics/" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">Demographics</a></li>
            <li><a href={Pdf1} target="_blank" rel="noopener noreferrer" className={classes.NavigationItems}>Market Snapshot</a></li>
            <li><a href={Pdf2} target="_blank" rel="noopener noreferrer" className={classes.NavigationItems}>Foley Forward Comprehensive Plan</a></li>
          </ul>
        </div>

        <div className={classes.FooterCol}>
          <ul>
            <li><a href="https://cityoffoley.org" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">City of Foley</a></li>
            <li><a href="https://cityoffoley.org/city-boards/#07ec64ca388885c49" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">Revitalization and Beautification Advisory Board</a></li>
            <li><a href="https://cityoffoley.org/city-boards/#bc56c55276cae12ca" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">Foley Historical Commission</a></li>
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