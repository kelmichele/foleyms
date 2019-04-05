import React, { Component } from "react";
import classes from "./BgImage.scss"; 

class BgImage extends Component {
  render() {
    return (
      <div className={classes.BgImage} style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}>
        <div className={classes.inside}>
          <h4 className={classes.bgTitle}>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

export default BgImage;
