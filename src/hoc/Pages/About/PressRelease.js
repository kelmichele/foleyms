import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import darrelyn from "../../../assets/images/darrelyn.jpg";
import ImageText from "../../../components/ImageText/ImageText";

const textExec = (
  <div>
    <h1 className={classes.h1Lg}>Main Street Executive Director</h1>
    <h4>Foley Hires New Main Street Director</h4>
    <p>
      Darrelyn Dunmore returns to her passion - economic and community development - as the executive director of Foley Main Street, a partner of Main Street Alabama. 
      Main Street Alabama's approach inspires people young and old not only to give back to their community but also to come back to their 
      hometowns: to live, to become entrepreneurs, to breathe new life into our downtowns and neighborhood commercial districts, and most 
      importantly to remember what is old can be new and thriving again. Main Street Alabama isn't just about Building Better Downtowns - 
      it is about making hometowns the best they can be. Economic development is at the heart of this statewide organization’s efforts to 
      revitalize downtowns. 
    </p>
  </div>
)

const pressRelease = () => {
  return(
    <div className={classes.PressReleasePage}>
      <Helmet>
        <title>Foley Main Street Director | Foley Main Street</title>
        <meta name="description" content="Foley Main Street is a stand alone 501(c)6 governed by the Main Street Board of Directors listed on this page." />
      </Helmet>
      
      <div className={classes.Exec}>
        <div className={classes.medKDef}>
          <h1 className={classes.h1Sm}>Main Street Executive Director</h1>
          <ImageText textContent={textExec} textFloat="textRight" image={darrelyn} gridType="textBig" addPadd="xtra" alt="Sherry Sullivan, Foley Main Street Director" />
          
          <div className={classes.clearfix} />
          <div className={classes.fullRelease}>
            <p>In her role, she will work with the community to implement Main Street’s four-step approach for downtown promotion, economic vitality, 
              community connectivity; and create an overall plan for downtown. “We are delighted to have Darrelyn spearheading the Foley Main Street 
              initiative. She brings years of industry expertise including economic development, business cultivation, and community relations. 
              She is a natural leader with a proven track record of success” said Chad Watkins, President of the Foley Main Street Board of Directors.  
            </p>
            
            <p>Darrelyn served as the president/CEO of the Eastern Shore Chamber of Commerce for 18 years. 
              During her tenure the Eastern Shore Chamber became an accredited chamber of commerce and the Eastern Shore Foundation was created 
              and utilized for work force and leadership development. She represented the Eastern Shore and Baldwin County on multiple boards 
              representing the business and tourism communities. She served as Chairman of the Chamber of Commerce Association of Alabama and on 
              the CCAA board for ten years as well as serving on the Alabama Tourism Council. She was the recipient of the lifetime achievement 
              James Wallace Award for her service to the State of Alabama and her chamber work. She is very proud of being a founding member of 
              Impact 100 Baldwin County and of CAP the regional Coastal Alabama Partnership. For the past five years she has worked with individuals, 
              families and small businesses in wealth management and business exit planning.
            </p>

            <p>Darrelyn graduated from California Polytechnic State University San Luis Obispo with a degree in Applied Art and Design. 
              She also completed the Institute of Organizational Management from the University of Georgia, is a member of the 2000 Baldwin County 
              Leadership class, and, graduated from the Intensive Economic Development Course at Auburn University.
            </p>

            <p>She currently serves as an Executive Board Member of the Mobile Bay National Estuary Program (MBNEP), is Chairman of the Historic 
              Blakeley Park State Authority and Chairman of the Equine Therapy Group Foundation in Baldwin County. 
            </p> 

            <p>She is married to Steve Dunmore, who is a small business owner himself to Steve’s Trailer Repair in Baldwin County.  
              Darrelyn and Steve live in Foley and have five children and four grandchildren. Darrelyn loves living in close proximity to the 
              Gulf of Mexico and taking early morning or weekend walks along the beach. 
            </p> 

            <p>“I am excited and honored to be working for Foley Main Street. 
              I am eager to work with our existing businesses, our board of directors and volunteers on this wonderful endeavor.  
              We are going to shine a spotlight on what a great place downtown Foley is and work together to help shape the future and to grow 
              Foley Main Street.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default pressRelease;