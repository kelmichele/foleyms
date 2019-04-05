import React, { Component } from "react";
import classes from "./Accordion.scss";

class Accordion extends Component {  
  render() {
    const accContent = this.props.accItems.map((accItem) =>
      <li key={accItem.id}>
        <button className={["uk-accordion-title"]}>{accItem.title}</button>
        <div className={["uk-accordion-content", classes.custContent].join(' ')}>
          <p>{accItem.content}</p>
        </div>
      </li>
    );

    return(
      <div className={classes.Accordion}>
        <ul data-uk-accordion>
          {accContent}
        </ul>
      </div>
    )
  }
}

export default Accordion;