import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.scss";
import Aux from "../../hoc/Aux/Aux";
import Pdf1 from "../../Mkt-Snapshot2019.pdf";
import Pdf2 from "../../FoleyFwdPlan_190320.pdf";
import MsMap from "../../MainStreetDist.pdf";
import MktExec from "../../Mkt-Exec-Summary.pdf";
import plan20 from "../../PlanOfAction2020.pdf";
import report19 from "../../AnnualReport2019.pdf";
import residentSurvey from "../../Resident-Consumer-Survey-June2020.pdf";

class NavigationItems extends Component {
  render() {
    return(
      <Aux>
        <li><NavLink to="/" className={classes.NavigationItems}>Home</NavLink></li>
        
        <li><NavLink className={classes.MobTitle} to="#">Explore</NavLink>
          {/* <NavLink to="/explore" className={classes.NavigationItems}></NavLink></li> */}
          <div className={["uk-navbar-dropdown", classes.custDrop].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/directory" className={[classes.NavigationItems, classes.dropLink].join(' ')}>Business Directory</NavLink></li>
              <li><NavLink to="/listings" className={[classes.NavigationItems, classes.dropLink].join(' ')}>Available Property</NavLink></li>
            </ul>
          </div>
        </li>

        <li><NavLink to="/events" className={classes.NavigationItems}>Events</NavLink></li>

        <li><NavLink className={classes.MobTitle} to="#">About</NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop].join(' ')}>
            <ul className={classes.dropMenu}>
              <li><NavLink to="/about" className={[classes.NavigationItems, classes.dropLink].join(' ')}>About Us</NavLink></li>
              <li><NavLink to="/board" className={[classes.NavigationItems, classes.dropLink].join(' ')}>Board of Directors</NavLink></li>
              <li><NavLink to="/contact" className={[classes.NavigationItems, classes.dropLink].join(' ')}>Contact</NavLink></li>
              {/* <li><NavLink to="/news-center" className={classes.NavigationItems}>Blog</NavLink></li> */}
            </ul>
          </div>
        </li>

        <li><NavLink className={classes.MobTitle} to="#">Community Links</NavLink>
          <div className={["uk-navbar-dropdown", classes.custDrop, classes.LgDrop].join(' ')}>
            <ul className={classes.dropMenu}>
              <li className={classes.cov}><NavLink to="/updates" className={[classes.NavigationItems, classes.dropLink, classes.alt].join(' ')}>COVID-19 Updates</NavLink></li>
              <li className={classes.blue}>
                <a href={residentSurvey} target="_blank" className={[classes.NavigationItems, classes.dropLink, classes.alt].join(' ')} rel="noopener noreferrer">
                Resident &amp; Consumer Survey</a>
              </li>

              
              <li>
                <a href={report19} target="_blank" className={[classes.NavigationItems, classes.dropLink].join(' ')} rel="noopener noreferrer">
                2019 Annual Report</a>
              </li>
              
              <li>
                <a href={plan20} target="_blank" className={[classes.NavigationItems, classes.dropLink].join(' ')} rel="noopener noreferrer">
                2020 Plan of Action</a>
              </li>
              
              <li><NavLink to="/press-release" className={[classes.NavigationItems, classes.dropLink].join(' ')}>Main Street Hires Dunmore</NavLink></li>
              
              <li><a href={MktExec} target="_blank" rel="noopener noreferrer" className={[classes.NavigationItems, classes.dropLink].join(' ')}>
                Market Study Executive Summary
              </a></li>

              <li><a href={Pdf1} target="_blank" rel="noopener noreferrer" className={[classes.NavigationItems, classes.dropLink].join(' ')}>
                Market Snapshot
              </a></li>
              
              <li><a href={Pdf2} target="_blank" rel="noopener noreferrer" className={[classes.NavigationItems, classes.dropLink].join(' ')}>
                Foley Forward Comprehensive Plan
              </a></li>

              <li><a href={MsMap} target="_blank" rel="noopener noreferrer" className={[classes.NavigationItems, classes.dropLink].join(' ')}>
                Main Street Foley Map
              </a></li>

              <li>
                <a href="https://cityoffoley.org" target="_blank" className={[classes.NavigationItems, classes.dropLink].join(' ')} rel="noopener noreferrer">
                City of Foley</a>
              </li>

              <li>
                <a href="https://cityoffoley.org/city-boards/#07ec64ca388885c49" target="_blank" className={[classes.NavigationItems, classes.dropLink].join(' ')} rel="noopener noreferrer">
                Revitalization and Beautification Advisory Board</a>
              </li>

              <li>
                <a href="https://cityoffoley.org/city-boards/#bc56c55276cae12ca" target="_blank" className={[classes.NavigationItems, classes.dropLink].join(' ')} rel="noopener noreferrer">
                Foley Historical Commission</a>
              </li>

              <li>
                <a href="https://cityoffoley.org/demographics/" target="_blank" className={[classes.NavigationItems, classes.dropLink].join(' ')} rel="noopener noreferrer">
                Demographics</a>
              </li>
            </ul>
          </div>
        </li>


      </Aux>
    );
  }
}

export default NavigationItems;