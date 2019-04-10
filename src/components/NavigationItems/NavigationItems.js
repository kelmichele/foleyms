import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.scss";
import Aux from "../../hoc/Aux/Aux";
import Pdf1 from "../../Mkt-Snapshot2019.pdf";
import Pdf2 from "../../FoleyFwdPlan_190320.pdf";

class NavigationItems extends Component {
  render() {
    return(
      <Aux>
        <li><NavLink to="/" className={classes.NavigationItems}>Home</NavLink></li>
        
        <li><NavLink to="#">Explore</NavLink>
          {/* <NavLink to="/explore" className={classes.NavigationItems}></NavLink></li> */}
          <div className={["uk-navbar-dropdown", classes.custDrop].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/directory" className={classes.NavigationItems}>Business Directory</NavLink></li>
              <li><NavLink to="/listings" className={classes.NavigationItems}>Available Property</NavLink></li>
              <li><NavLink to="/listings" className={classes.NavigationItems}>Maps</NavLink></li>
            </ul>
          </div>
        </li>

        <li><NavLink to="/events" className={classes.NavigationItems}>Events</NavLink></li>

        <li><NavLink to="#">About</NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/about" className={classes.NavigationItems}>About Us</NavLink></li>
              <li><NavLink to="/board" className={classes.NavigationItems}>Board of Directors</NavLink></li>
              <li><NavLink to="/contact" className={classes.NavigationItems}>Contact</NavLink></li>
            </ul>
          </div>
        </li>

        <li><NavLink to="#">Community Links</NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop, classes.LgDrop].join(' ')}>
            <ul className={classes.dropMenu}>
              <li>
                <a href="https://cityoffoley.org" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">
                City of Foley</a>
              </li>

              <li>
                <a href="https://cityoffoley.org/city-boards/#07ec64ca388885c49" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">
                Revitalization and Beautification Advisory Board</a>
              </li>

              <li>
                <a href="https://cityoffoley.org/city-boards/#bc56c55276cae12ca" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">
                Foley Historical Commission</a>
              </li>

              <li>
                <a href="https://cityoffoley.org/demographics/" target="_blank" className={classes.NavigationItems} rel="noopener noreferrer">
                Demographics</a>
              </li>

              <li><a href={Pdf1} target="_blank" rel="noopener noreferrer" className={classes.NavigationItems}>
                Market Snapshot
              </a></li>
              <li><a href={Pdf2} target="_blank" rel="noopener noreferrer" className={classes.NavigationItems}>
                Foley Forward Comprehensive Plan
              </a></li>

            </ul>
          </div>
        </li>


      </Aux>
    );
  }
}

export default NavigationItems;