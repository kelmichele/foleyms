import React, { Component } from "react";
import classes from "../../App.scss";

class NewsPosts extends Component {
  render() {
    return (
      <div className={classes.med2Def}>
        {/* <div id="dib-categories" className={classes.PostCats}></div> */}
        <div id="dib-posts"></div>
      </div>
    );
  }
}
export default NewsPosts;