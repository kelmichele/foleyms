import React, { Component } from "react";

import classes from "./Header.scss";
// import logo from "../../assets/images/msaRedRGB.jpg";
import logo from "../../assets/images/FMS-teal.png";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import { Link } from "react-router-dom";

class Header extends Component {
  

  render() {
    // data-uk-sticky={actClass}
    // const actClass = (
    //   'cls-active: uk-navbar-sticky;'
    // );
    
    // if (window.location.pathname === '/') return null;
    return (
      <div className={classes.Header} data-uk-sticky="sel-target: .Header; cls-active: uk-navbar-sticky;">
       {/* data-uk-sticky="sel-target: .Header; cls-active: uk-navbar-sticky;"> */}
        <div className={classes.insideXl}>

          <header className={classes.HeaderDiv}>
            <div className={classes.LogoHd}>
              <Link to="/"><img src={logo} alt="Mainstreet Foley Logo" className={classes.LogoImg} /></Link>
            </div>

            {/* style={{ position: 'relative', zIndex: '980' }} */}
            <nav className={classes.navbarWrap} data-uk-navbar="mode: hover">

              <ul className={["uk-navbar-nav", classes.custNav].join(' ')}>
                <NavigationItems />
              </ul>
            </nav>


            <button className={classes.ocNavBtn} data-uk-toggle="target: #offcanvas-nav">
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div id="offcanvas-nav" data-uk-offcanvas="overlay: true; flip: true;">
              <button className="uk-offcanvas-close" type="button" uk-close></button>
              <div className={["uk-offcanvas-bar", classes.mobileMenu].join(' ')}>
                <ul className={["uk-nav", classes.mobNav].join(' ')}>
                  <NavigationItems />
                </ul>
              </div>
            </div>

          </header>
        </div>
      </div>
    );
  }
}
export default Header;