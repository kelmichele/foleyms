import React from "react";
import classes from "./PhotoCat.scss";
import { HashLink as Link } from 'react-router-hash-link';

const photoCat = (props) => {
  return (
    <div className={[classes.photoCat, classes[props.TopDist]].join(' ')}>
      <div className={[classes.ServiceBox, classes.Box1].join(' ')}>
        <Link to="/directory#Dining" className={classes.SboxTitle}>Dining</Link>
      </div>

      <div className={[classes.ServiceBox, classes.Box2].join(' ')}>
        <Link to="/directory#Shopping" className={classes.SboxTitle}>Shopping</Link>
      </div>

      <div className={[classes.ServiceBox, classes.Box3].join(' ')}>
        <Link to="/directory#Services" className={classes.SboxTitle}>Services</Link>
      </div>

      <div className={[classes.ServiceBox, classes.Box4].join(' ')}>
        <Link to="/directory#Misc" className={classes.SboxTitle}>Misc.</Link>
      </div>
    </div>
  )
};

export default photoCat;