import React from 'react';
import classes from './Footer.scss';
import Social from '../../hoc/Social/Social';
import { Link } from 'react-router-dom';
import MsLogo from "../../assets/images/msaRedRGB.jpg";
import logo from "../../assets/images/FMS-teal.png";

const footer = () => { 
  return (
    <div className={classes.Footer}>
      <div className={classes.med2Def}>

        <div className={[classes.FtGrid, classes.FgLast].join(' ')}>
          <a href="http://www.mainstreetalabama.org/" target="_blank" rel="noopener noreferrer">
            <img src={MsLogo} alt="Main Street Alabama Logo" className={classes.LogoImg} />
          </a>
        </div>  

        <div className={[classes.FtGrid, classes.FgAcc].join(' ')}>
          <p className={classes.FtTitle}>Contact Us</p>
          <p className={classes.FtInfo}>120 S. McKenzie Street <br />
            Foley, Al 36535 </p>
          <p className={classes.FtInfo}>251.366.1565</p>
          <p className={classes.FtInfo}>foleymainstreet@gmail.com</p>
          <Social Colors="green"/>
        </div>

        <div className={[classes.FtGrid, classes.Fg3].join(' ')}>
          <Link to="/"><img src={logo} alt="Foley Main Street Logo" className={classes.LogoImg} /></Link>
          <p className={classes.FtMoto}>Preservation. Promotion. Pride.</p>
        </div>
      </div>


      <div className={classes.insideAlt}>
        <div className={classes.FooterBtm}>
          <p className={classes.Hs}>Design by <a href="https://hsdesignhouse.com/" target="_blank" rel="noopener noreferrer">
          High Seas Design House</a></p>

          <p className={classes.Copy}>Copyright 2019. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;