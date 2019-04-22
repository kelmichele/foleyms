import React from "react";
import classes from "./ImageText.scss";
import Aux from "../../hoc/Aux/Aux";

const imageText = (props) => {
  return (
    <Aux>
      <div className={[classes.ImageText, classes[props.textFloat], classes[props.gridType], classes[props.lessPadd]].join(' ')}>
        <div className={classes.ImageHlf}>
          <img src={props.image} className={classes.imgResponsive} alt={props.alt} />
        </div>

        <div className={[classes.TextHlf, classes[props.addPadd]].join(' ')}>
          {props.textContent}
        </div>
      </div>
    </Aux>
  );
}
imageText.defaultProps = {
  gridType: "equal"
};
export default imageText;