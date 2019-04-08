import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
// import PageHeader from "../../../components/PageHeader/PageHeader";
import Parallax from "../../../components/Parallax/Parallax";
import hero from "../../../assets/images/board.jpg";

const plaxHd1 = (
<h1 className={classes.lightHd}>Board of Directors</h1>
);

const board = () => {
  return(
    <div className={classes.boardPage}>
      <Helmet>
        <title>Board of Directors | Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>

      <Parallax
        plaxImage={hero}
        // plaxShadow="true"
        plaxHeadline={plaxHd1}
        // plaxContent={plaxContent1}
        // bgSize="100%"
        plaxHeight="300px"
      />

      {/* <div className={classes.relTitle}>
        {plaxHd1}
        <img src={hero} class={classes.imgCenter} alt="board of directors"/>
      </div> */}

      <div className={classes.boardBody}>
        <div className={classes.med2Def}>
          <div className={classes.intro}>
            <p>Main Street is a stand alone 501(c)6 governed by the Main Street Board of Directors. The board members serve staggered terms for up to three years, and represent a cross section of our business community.</p>
            <p>To get involved with Foley Main Street Board of Directors, you may email <a href="mailto: cwatkins@was-design.com">Chad Watkins </a>
            or <a href="mailto:foleymainstreet@gmail.com">foleymainstreet@gmail.com</a> or by phone at 251.401.4801.</p>
          </div>
        </div>

        <div className={classes.medDef}>
          <ul className={classes.officers}>
            <h3 className={classes.ofc}>Officers</h3>
            <li><a href="mailto: cwatkins@was-design.com"><b>President</b><br />Chad Watkins<br /><span>WAS Design</span></a></li>
            <li><a href="mailto: jshanks1975@gmail.com"><b>Vice President</b><br />Justin Shanks<br /><span>Foley Bike Shop</span></a></li>
            <li><a href="mailto: flake@mediacombb.net"><b>Secretary</b><br />Barbara Ingram<br /><span>Economic Development</span></a></li>
            <li><b>Treasurer</b><br />Ryan Wood<br /><span>Alabama Credit Union</span></li>
          </ul>

          <ul className={classes.members}>
            <h3>Members</h3>
            <li>Courtney Brett<br /><span>Casburn Architecture</span></li>
            <li>Tom Debell<br /><span>Riviera Utilities</span></li>
            <li>Greg Driskell<br /><span>Fish River Furnishings</span></li>
            <li>Kristen Hellmich<br /><span>OWA</span></li>
            <li>Frances Holk-Jones<br /><span>State Farm Insurnace</span></li>
            <li>Anthony Kaiser<br /><span>Kaiser Realty</span></li>
            <li>Todd Koniar<br /><span>Vulcan, Inc.</span></li>
            <li>Lindsay Schumacher<br /><span>Marketing & Public Relations Consultant</span></li>
            <li>Lead Reddick<br /><span>Casburn Architecture</span></li>
            <li>Clark Stewart<br /><span>WHEP Radio</span></li>
            <li>Shannon Tierney<br /><span>BB&T Bank</span></li>
            <li>Charlie Ebert<br /><span>City Council Liaison</span></li>
          </ul>

          {/* <div className={classes.clearfix} />
          <p>To get involved with Foley Main Street Board of Directors, you may email <a href="mailto: cwatkins@was-design.com">Chad Watkins </a>
          or <a href="mailto:foleymainstreet@gmail.com">foleymainstreet@gmail.com</a> or by phone at 251.401.4801.</p> */}
        </div>
      </div>
    </div>
  );
}
export default board;