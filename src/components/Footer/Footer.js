import React from 'react';
import classes from './Footer.scss';
import Social from '../../hoc/Social/Social';

const footer = () => { 
  return (
    <div className={classes.Footer}>
      <div className={classes.inside}>
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