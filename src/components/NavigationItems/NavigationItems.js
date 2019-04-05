import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.scss";
import Aux from "../../hoc/Aux/Aux";

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

      </Aux>
    );
  }
}

export default NavigationItems;