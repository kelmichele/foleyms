import React from "react";
import { Helmet } from "react-helmet";
import Aux from "../../../hoc/Aux/Aux";
// import { Link } from "react-router-dom";
const classes = require('./Updates.scss');
// const tips = require("../../../COVIDTips.pdf");
const ait = require('../../../assets/images/covAit.png');
const ptac = require('../../../assets/images/covPtac.jpg');

const updates = () => {
  return (
    <Aux>
    <Helmet>
      <title>Alabama Small Business Development Center Network updatesBody</title>
      <meta name="description" content="Foley Main Street is committed to keeping our residents and businesses safe and informed during the COVID-19 outbreak." />
      <body className={classes.sbUpdatesPage} />
    </Helmet>


    <div className={classes.sbdc}>
      <div className={classes.uhead}>
        <h1>4/7/2020 SBDC Updates<br/>
        <span>From the Alabama Small Business Development Center Network</span>
        </h1>
      </div>
      
      <div className={classes.updatesBody}>
        <div className={classes.med2Def}>
          
          <ul className={classes.sbdcAcc} data-uk-accordion>
            <li className={[classes.ubBlock, "uk-open"].join(' ')}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Status Update: SBA Loan Programs</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <h4>In talking with SBDC colleagues and lenders throughout the US:</h4>
                <ul>
                  <li>No one has received any portion of the $10,000 forgivable advance that was supposed to arrive "within three days." 
                    Current guidance is "5 to 7 days, maybe longer".</li>
                  <li>We have heard that the "up to $10,000" forgivable advance (part of the Disaster Loan program) may be based on an employee 
                    formula: Based on guidance from Treasury, SBA has allotted $1,000 per employee, up to ten employees. While we have yet to 
                    confirm this formula, SBA employees have stated that this topic was discussed on an internal agency calls. We may not know 
                    more until the first disbursements arrive.</li>
                  <li>To calculate the number of employees for the Paycheck Protection Program (PPP), SBA considers 30 hours per week as Full 
                    Time. (IRS and GAO use 40 hours.) Two employees that work 15 hours per week equal one FTE.</li>
                  <li>"Payroll costs" include the employee salaries plus healthcare and other employment expenses.</li>
                  <li>The basics: Applications should include your ZIP+4 location. The date of formation should match Alabama Secretary of State 
                    records. Companies with equal owners must nominate a "controlling owner."</li>
                  <li>SBA confirmed that <a href="https://www.sba.gov/about-sba/sba-newsroom/press-releases-media-advisories/sba-clarifies-eligibility-faith-based-organizations-participate-paycheck-protection-and-economic" target="_blank" rel="noopener noreferrer">religious organizations are eligible.</a></li>
                  <li>Lenders may request Form 941 for payroll verification. Companies that use Professional Employer Organizations 
                    (PEO's) can submit payroll processor records instead.</li>
                </ul>
                
                <p><b>Sole Proprietors and Independent Contractors</b> can begin submitting their applications next week; 
                we are expecting additional application guidance from SBA. Some banks have accepted these applications, 
                but will not process them until next week.</p>

                <p>SBA released the <a href="https://www.sba.gov/sites/default/files/2020-04/PPP--IFRN%20FINAL_0.pdf" target="_blank" rel="noopener noreferrer">operating guidelines</a> for the Payroll Protection Program (PPP) late Thursday. 
                  The document clarifies several items that have been discussed on our webinars over the last two weeks.</p>
                <ul className={classes.innerUL}>
                  <li>Lenders are capped at 1% interest rate, and a 2-year term.</li>
                  <li>The PPP application form has been updated; Make sure your <a href="http://asbdc.org/cares/" target="_blank" rel="noopener noreferrer">Form 2483 is dated 04/2020</a> (bottom left corner).</li>
                  <li>Do not count independent contractors when calculating average monthly payroll.</li>
                  <li>Any portion of employee compensation that exceeds $100,000 (per employee) cannot be included in the calculation.</li>
                  <li>Early versions of the application indicated that PPP loans are not available to entities owned 20% or more by individuals 
                    who are not US citizens or green card holders; the final application form does not include this language. 
                    The payroll calculation should only include employees that reside in the US.</li>
                </ul>

                <p><b>However:</b></p>
                <li>The guidelines do not clarify the Payroll Date discrepancy between Congress (12 months preceding the loan date) 
                  and SBA's form (previous calendar year). Applicants are advised to discuss their calculation with their lender.</li>

                <p>Our next webinar is at 11AM on Wednesday, April 8th.</p>
                <ul className={classes.innerUL}>
                  <li><a href="https://asbdc.ecenterdirect.com/events/8503" target="_blank" rel="noopener noreferrer">Register Online.</a> 1,000 seats available; a recording will be posted.</li>
                  <li>Coming soon: Streamlined question submission process to connect with the SBDC Disaster Response Team and Capital Access 
                    (CAP) Team.</li>
                </ul>
              </div>
            </li>
           
            <li className={classes.ubBlock}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Participating Lenders: Paycheck Protection Program</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <p>When the Paycheck Protection Program launched on April 3rd, not all lenders were ready to start accepting applications. 
                  Some have stated that they will only provide PPP loans to existing customers that have depository accounts 
                  (and not just existing loans). At least one major bank has already stopped accepting PPP applications. Other lenders have 
                  indicated that they will accept applications from anyone.</p>
                  
                <a href="https://www.sba.gov/paycheckprotection/find" target="_blank" rel="noopener noreferrer">VIEW THE LIST OF PARTICIPATING LENDERS IN YOUR AREA</a>
              </div>
            </li>
            
            <li className={classes.ubBlock}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Employee Retention Tax Credit</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <p>The Employee Retention Credit is designed to encourage businesses to keep employees on their payroll. The refundable tax credit is 50% of up to $10,000 in wages paid by an eligible employer whose business has been financially impacted by COVID-19.
                Note: Companies cannot claim a tax credit and use forgivable EIDL or PPP proceeds on those employees.</p>
                
                <a href="https://www.irs.gov/newsroom/irs-employee-retention-credit-available-for-many-businesses-financially-impacted-by-covid-19" target="_blank" rel="noopener noreferrer">Learn more about the Tax Credit here.</a>
              </div>
            </li>
            
            <li className={classes.ubBlock}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Do you have the tools needed to conquer a business crisis?</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <p>We have a guide with suggestions on Cash Management, Pricing/Cost Containment, Supply Chain Management, and Marketing.</p>
                
                <a href="http://asbdc.org/wp-content/uploads/AL-Guide-to-Conquering-a-Business-Crisis-v2.pdf" target="_blank" rel="noopener noreferrer">VIEW THE GUIDE</a>
              </div>
            </li>
            
            <li className={classes.ubBlock}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Certificate of Existence</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <p>Some corporations and businesses may be required to prove their existence as part of their application. 
                  Certificates of Existence can be obtained through visiting the Alabama Secretary of State’s website.
                  The $28 fee has not been waived, so only do this if your lender specifically asks for it.</p>
                  
                <a href="https://www.alabamainteractive.org/sos_eCertificate/welcome.action" target="_blank" rel="noopener noreferrer">Alabama Secretary of State</a>
              </div>
            </li>
            
            <li className={classes.ubBlock}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Alabama Procurement Technical Assistance Center</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <a href="http://al-ptac.org/" target="_blank" rel="noopener noreferrer">
                  <img src={ptac} className={classes.imgResponsive} alt="Alabama Procurement Technical Assistance Center logo" />
                </a>
                <p>The Alabama Procurement Technical Assistance Center (PTAC) has offices that are co-located with the Alabama SBDC. 
                Procurement Specialists help companies compete for government contracts. The AL-PTAC offers the state's only no-cost 
                bid-matching service.</p>
              </div>
            </li>
            
            <li className={classes.ubBlock}>
              <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>Alabama International Trade Center</button>
              <div className={["uk-accordion-content", classes.custContent].join(' ')}>
                <a href="https://aitc.ua.edu/" target="_blank" rel="noopener noreferrer">
                  <img src={ait} className={classes.imgResponsive} alt="Alabama International Trade Center logo" />
                </a>
                <p>The William R. Bennett Alabama International Trade Center, located at the University of Alabama, 
                  provides export research, training, and financing services to Alabama’s small business community. 
                  The Trade Center has been providing these valuable services to the public for 41+ years. Its dedicated staff includes 
                  professionals that specialize in international sales & marketing, logistics, export controls & licensing, business 
                  strategy, and export finance. Member of the Export Alabama Alliance.
                </p>
              </div>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
    </Aux>
  );
};

export default updates;