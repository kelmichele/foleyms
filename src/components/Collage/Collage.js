import React from "react";
import classes from "./Collage.scss";
import { HashLink as Link } from 'react-router-hash-link';

import Coll1 from "../../assets/images/foley4.jpg";

const collage = () => {
  return (
    <div className={classes.CollageSec}>
      <div className={classes.insideAlt}>
        <div className={classes.CollBox}>
          <div className={classes.CollLeft}>
            <div className={classes.LeftImg}><img src={Coll1} alt="Foley dog park" className={classes.imgResponsive} /></div>
            <Link to="/directory#Dining" className={classes.LeftLink}>View Maps</Link>
          </div>

          <div className={classes.CollRight}>
            <div className={classes.CollTxt}>
              <p>
                Just eleven miles north of Alabama’s white sand beaches, Foley’s historic downtown epitomizes old Alabama charm.
                Downtown Foley is home to historic sites, unique restaurants, a variety of retailers and so much more.
                The area captivates visitors and residents alike with its picturesque beauty.
                  </p>
            </div>

            <div className={classes.Cluster}>
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
                <Link to="/directory#Misc" className={classes.SboxTitle}>More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default collage;