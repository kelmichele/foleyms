import React from "react";
import classes from "./Events.scss";
import Parallax from "../../../components/Parallax/Parallax";
import phImage from "../../../assets/images/ph.jpg";
// import Calendar from "../../../components/Calendar/Calendar";

const pH1 = (
  <h1 className={classes.lightHd}>Upcoming Events</h1>
);

// const events = () => {
//   return (
//     <div className={classes.eventsPage}>
//       <Parallax plaxStyle="styleHd" plaxHeadline={pH1} plaxImage={phImage} />
      
//       <div className={classes.inside}>
//         {/* <Calendar /> */}
        // <div
        //   data-tockify-component="calendar"
        //   data-tockify-calendar="foley.downtown"
        // />
        
//       </div>
//     </div>
//   );
// };

// export default events;


// function CalendarList(props) {
//   if (!props.calBox) {
//     return null;
//   }
//   return (`
//     <div className="EventEmbed">
//       <div
//         data-tockify-component="calendar"
//         data-tockify-calendar="foley.downtown"
//       />
//     </div>`
//   );
// }

class Events extends React.Component {
  // state = {showCal: true }
  // constructor(props) {
  //   super(props);
  //   this.state = { showCal: true };
  //   this.handleToggleClick = this.handleToggleClick.bind(this);
  // }

  // componentDidMount() {
  //   // this.setState({ showCal: true });
  //   console.log("event page console - showCal:" + this.state.showCal );
  //   // CalendarList();
  // }
  
  
  // handleToggleClick() {
  //   this.setState(state => ({
  //     showCal: !state.showCal
  //   }));
  // }


  render() {
    // let calendar = null;
      // calendar = ("xxxx");

    return (
      <div className={classes.eventsPage}>
        <Parallax plaxStyle="styleHd" plaxHeadline={pH1} plaxImage={phImage} />
        <div className={classes.eventsBody}>
          <div className={classes.med2Def}>
            {/* <button onClick={this.handleToggleClick}>{this.state.showCal ? 'Hide' : 'Show'}</button>  */}
            <br />
            {/* <CalendarList calBox={this.state.showCal} /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Events;