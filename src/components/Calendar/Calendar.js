import React, { Component } from "react";
// import React from "react";


// const calendar = () => {
//   return(
//     <div
//       data-tockify-component="calendar"
//       data-tockify-calendar="foley.downtown"
//     />
//   );
// }
// export default calendar;
  

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div
        data-tockify-component="calendar"
        data-tockify-calendar="foley.downtown"
      />
    );
  }
}
export default Calendar;