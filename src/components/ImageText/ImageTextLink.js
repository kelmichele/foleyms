import React from "react";
import classes from "./ImageText.scss";
import Aux from "../../hoc/Aux/Aux";

const imageTextLink = (props) => {
  return (
    <Aux>
      <div className={[classes.ImageTextLink, classes[props.textFloat], classes[props.gridType], classes[props.lessPadd]].join(' ')}>
        <div className={classes.ImageHlf}>
          {/* <img src= className={classes.imgResponsive} alt={props.alt} /> */}
          <a href="http://www.mainstreetalabama.org/" target="_blank" rel="noopener noreferrer">
            <img src={props.image} className={classes.imgResponsive} alt="Main Street Alabama Logo" />
          </a>
        </div>

        <div className={[classes.TextHlf, classes[props.addPadd]].join(' ')}>
          {props.textContent}
        </div>
      </div>
    </Aux>
  );
}
imageTextLink.defaultProps = {
  gridType: "equal"
};
export default imageTextLink;