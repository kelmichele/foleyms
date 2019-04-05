import React, { Component } from "react";
import classes from "./DropList.scss";



// const dropList = (props) => {
//   return (
//     <div className={classes.dropList} style={{ backgroundImage: "url(" + props.BgImage + ")" }}>
//       <div className={classes.ListDD}>
//         <h4>{props.category}</h4>
//         <p>{props.subcat}</p>
//         <button className="uk-button uk-button-default" type="button">
//           <span uk-icon="icon: chevron-down"></span>
//         </button>

//         <div className="uk-width-large" uk-dropdown="mode:click; pos: bottom-right;">
//           {props.dropItems}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default dropList;

class DropList extends Component {
  render() {
      const dropContent = this.props.dropItems.map((dropItem) =>
        <li key={dropItem.id} className={classes.dropItems}>
          {dropItem.name}
        </li>
      );

    return (
      <div className={classes.dropList} style={{ backgroundImage: "url(" + this.props.BgImage + ")" }}>
        <div className={classes.ListDD}>
          <h4>{this.props.category}</h4>
          <p>{this.props.subcat}</p>
          <button className="uk-button uk-button-default" type="button">
            <span uk-icon="icon: chevron-down"></span>
          </button>

          <div className="uk-width-large" uk-dropdown="mode:click; pos: bottom-right;">
            <ul>{dropContent}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DropList;