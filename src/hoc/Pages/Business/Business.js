import React from "react";
import classes from "./Business.scss";
import { Helmet } from "react-helmet";
import Parallax from "../../../components/Parallax/Parallax";
import phImage from "../../../assets/images/TEMProses.jpg";
import Aux from "../../../hoc/Aux/Aux";

const pH1 = (
  <h1 className={classes.lightHd}>Business Name</h1>
);

const business = () => {
  return (
    <Aux>
      <Helmet>
        <title>Business Name</title>
        <meta name="description" content="" />
        <body className={classes.aboutPage} />
      </Helmet>


      <div className={classes.aboutPage}>
        <Parallax plaxStyle="styleHd" plaxHeadline={pH1} plaxImage={phImage} />
      </div>
    </Aux>
  );
}
export default business;