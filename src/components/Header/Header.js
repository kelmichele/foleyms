import React, { Component } from "react";

import classes from "./Header.scss";
import logo from "../../assets/images/FMS-teal.png";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../../components/Drawer/Drawer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickClass: window.innerWidth < 824 ? 'show-on-up: true; animation: uk-animation-slide-top; sel-target: .Header; cls-active: uk-navbar-sticky;' : 'show-on-up: false; sel-target: .Header; cls-active: uk-navbar-sticky'

    };
  }

  handleResize = e => {
    const stickClass = window.innerWidth < 824 ? 'show-on-up: true; animation: uk-animation-slide-top; sel-target: .Header; cls-active: uk-navbar-sticky;' : 'show-on-up: false; sel-target: .Header; cls-active: uk-navbar-sticky';
    
    this.setState(prevState => {
      return {
        stickClass
      };
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    
    return (
      <div className={classes.Header} data-uk-sticky={this.state.stickClass}>
     
     
        <div className={classes.covid}>
          <div className={classes.inside}>
            <div className={classes.ocLinks}>
              <Link to="/updates" className={classes.covLink}>COVID-19 Information, Local Updates, and Tips</Link>
            </div>
          </div>
        </div>
        
        
        <div className={classes.insideXl}>

          <header className={classes.HeaderDiv}>
            <div className={classes.LogoHd}>
              <Link to="/"><img src={logo} alt="Mainstreet Foley Logo" className={classes.LogoImg} /></Link>
            </div>

            <nav className={classes.navbarWrap} data-uk-navbar="mode: hover">
              <ul className={["uk-navbar-nav", classes.custNav].join(' ')}>
                <NavigationItems />
              </ul>
            </nav>

            <div className={classes.NavMobileBtn}><TemporaryDrawer /></div>
          </header>
        </div>
      </div>
    );
  }
}
export default Header;