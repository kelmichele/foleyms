import React from "react";
import classes from "./PageHeader.scss";

const pageHeader = (props) => {
  return (
    <div
      className={[classes.PageHeader, classes[props.Pos]].join(' ')}
      style={{ backgroundImage: "url(" + props.phImage + ")" }}
      // if (props.plaxOpt) { data-uk-parallax }
    >
      <div className={classes.Overlay} style={{ opacity: props.ovPacity }}></div>
      <div className={classes.TextBx}><h1 className={props.hColor === "white" ? classes.Light : classes.Dark}>{props.pageTitle}</h1></div>
    </div>
  );
}
pageHeader.defaultProps = {
  ovPacity: 0
};
export default pageHeader;
// const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
