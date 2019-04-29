import React, { Component } from "react";
import classes from "./Parallax.scss";

class Parallax extends Component {
  render() {
    return (
      <div
        className={[classes.Parallax, classes[this.props.plaxShadow], classes[this.props.plaxStyle]].join(' ')}
        data-uk-parallax={this.props.bgy}
        style={{ backgroundImage: "url(" + this.props.plaxImage + ")", backgroundSize: this.props.bgSize }}
        // , backgroundPosition: this.props.bgPos
      >
        <div className={classes.innerLax}>
          <div className={classes.inside}>
            {this.props.plaxHeadline}
            {this.props.plaxContent}
          </div>
        </div>
      </div>
    );
  }
}
Parallax.defaultProps = {
  bgy: "bgy: -100",
  plaxStyle: "styleFull",
  bgSize: "cover",
  // bgPos: "center center",
  // plaxHeight: "400px"
};
export default Parallax;