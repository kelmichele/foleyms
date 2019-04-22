import React, { Component } from "react";
import classes from "./Accordion.scss";

class Accordion extends Component {  
  render() {
    const accContent = this.props.accItems.map((accItem) =>
      <li key={accItem.id}>
        <button className={[classes.AccTitle, "uk-accordion-title"].join(' ')}>{accItem.title}</button>
        <div className={["uk-accordion-content", classes.custContent].join(' ')}>
          <p>{accItem.content}</p>
        </div>
      </li>
    );

    return(
      <div className={[classes.Accordion, classes[this.props.AccCaseClass]].join(' ')}>
        <ul data-uk-accordion>
          {accContent}
        </ul>
      </div>
    )
  }
}

export default Accordion;