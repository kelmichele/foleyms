import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import heroRel from "../../../assets/images/boardNrw.jpg";
import sherry from "../../../assets/images/sherry.jpg";
import ImageText from "../../../components/ImageText/ImageText";

const textExec = (
  <div>
    <h3>Main Street Executive Director</h3>
    <p>In January 2019, Sherry Sullivan took the position as Foley’s first Main Street Executive Director.
      In her role, she will work with the community to implement Main Street’s four-step approach for downtown promotion,
      economic vitality, community connectivity; and create an overall plan for downtown. “I am excited to begin my new role
      as Foley’s Main Street Director. Foley is a great place and I can’t wait to begin meeting with all the stakeholders and
      learning the community. I look forward to highlighting the historic downtown and creating a place where people are excited
      to visit and shop.“ Sullivan said.
    </p>
    <p>Sullivan, a native of Baldwin County, attended Troy State University and spent most of her career working for municipal government.
    She has extensive experience in project management, working with community organizations and marketing.</p>
  </div>
)

const board = () => {
  return(
    <div className={classes.boardPage}>
      <Helmet>
        <title>Board of Directors | Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>

      <div className={classes.relTitle}>
        <h1>Board of Directors</h1>
        <img src={heroRel} className={classes.imgCenter} alt="Foley Main Street Board of Directors"/>
      </div>

      <div className={classes.boardBody}>
        <div className={classes.insideNrw}>
          <div className={classes.intro}>
            <p>Main Street is a stand alone 501(c)6 governed by the Main Street Board of Directors. The board members serve staggered terms for up to three years, and represent a cross section of our business community.</p>
            <p>To get involved with Foley Main Street Board of Directors, you may email <a href="mailto: cwatkins@was-design.com">Chad Watkins </a>
            or <a href="mailto:foleymainstreet@gmail.com">foleymainstreet@gmail.com</a> or by phone at 251.401.4801.</p>
          </div>
        </div>

        <div className={classes.OfficerBox}>
          <div className={classes.medDef}>
            <ul className={classes.officers}>
              <h3 className={classes.ofc}>Officers</h3>
              <li><a href="mailto: cwatkins@was-design.com"><b>President</b><br />Chad Watkins<br /><span>WAS Design</span></a></li>
              <li><a href="mailto: jshanks1975@gmail.com"><b>Vice President</b><br />Justin Shanks<br /><span>Foley Bike Shop</span></a></li>
              <li><a href="mailto: flake@mediacombb.net"><b>Secretary</b><br />Barbara Ingram<br /><span>Economic Development</span></a></li>
              <li><b>Treasurer</b><br />Ryan Wood<br /><span>Alabama Credit Union</span></li>
            </ul>
          </div>
        </div>

        <div className={classes.medDef}>
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
        </div>

        <div className={classes.Exec}>
          <div className={classes.medDef}>
            <ImageText textContent={textExec} textFloat="textRight" image={sherry} gridType="textBig" addPadd="xtra" alt="Sherry Sullivan, Foley Main Street Director" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default board;