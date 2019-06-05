import React, { Component } from 'react';
import classes from "./Buslisting.scss";
import { Helmet } from "react-helmet";
// import photo from "../../assets/images/Foley-3021.jpg";


function makeComparator(key, order = 'asc') {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (aVal > bVal) comparison = 1;
    if (aVal < bVal) comparison = -1;

    return order === 'desc' ? (comparison * -1) : comparison
  };
}

class BuslistingsList extends Component {
  buslistingItems() {
    return this.props.buslistings.sort(makeComparator('name')).map(buslisting =>
      <li key={buslisting.id} data-tags={["all " + buslisting.category]} className={classes[buslisting.category]}>
        <a href={buslisting.website} target="_blank" rel="noopener noreferrer" className="uk-text-middle">{buslisting.name}</a> 
      </li>
    );
  }

  render() {
    return (
      <div className={[classes.BuslistingsList, classes.style1].join(' ')}>
        <div data-uk-filter="target: .js-filter">
          <Helmet>
            <title>Foley Main Street Business Directory</title>
            <meta name="description" content="Take a look at all of the great businesses located in Downtown Foley." />
          </Helmet>
          
          <div className={classes.BusListHead}>
            <div className={classes.medDef}>
              <div className={classes.textSide}>
                <h1>Business Directory</h1>
                <p className={classes.ConInfo}>Explore Downtown Foley by category, or select a business to visit its website and learn more.
                </p>
              </div>

              <ul className={classes.filterList}>
                {/* <li className={[classes.all, "uk-active"].join(' ')} data-uk-filter-control="[data-tags*='all']"><button type="button">All</button></li> */}
                <li className={classes.shop} data-uk-filter-control="[data-tags*='retail']"><button type="button">Retail</button></li>
                <li className={classes.dine} data-uk-filter-control="[data-tags*='dining']"><button type="button">Dining</button></li>
                <li className={classes.attr} data-uk-filter-control="[data-tags*='misc']"><button type="button">Miscellaneous</button></li>
                <li className={classes.serve} data-uk-filter-control="[data-tags*='services']"><button type="button">Services</button></li>
              </ul>
            </div>
          </div>

          <div className={classes.BusListBody}>
            <div className={classes.medDef}>
              <ul className={["js-filter", classes.filterContent].join(' ')}>
                {this.buslistingItems()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuslistingsList;