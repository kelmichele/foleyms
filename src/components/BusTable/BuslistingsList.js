import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Buslisting.scss";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader/PageHeader";
import phBG from "../../assets/images/TEMPgads.jpg";


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

// React.
// const FilterContent = this.props.FilterItems.map((FilterItem) =>
//   <li key={FilterItem.id} data-tags={["all " + FilterItem.tags]}>
//     <a href={FilterItem.website} target="_blank" rel="noopener noreferrer">{FilterItem.name}</a>
//   </li>
// );

class BuslistingsList extends Component {
  buslistingItems() {
    return this.props.buslistings.sort(makeComparator('name')).map(buslisting =>
      <li key={buslisting.id} data-tags={["all " + buslisting.category]}>
        <NavLink to={`/buslistings/${buslisting.id}`}>{buslisting.name}</NavLink>
      </li>
    );
  }

  render() {
    return (
      <div className={classes.BuslistingsList}>
        <Helmet>
          <title>Foley Main Street Business Directory</title>
          <meta name="description" content="" />
        </Helmet>
        
        <PageHeader phImage={phBG} ovPacity=".4" hColor="white" pageTitle="Business Directory" Pos="center" />

        <div className={classes.medDef}>
          <div data-uk-filter="target: .js-filter">
            <ul className={classes.filterList}>
              <li className={[classes.all, "uk-active"].join(' ')} data-uk-filter-control="[data-tags*='all']"><button type="button">All</button></li>
              <li className={classes.shop} data-uk-filter-control="[data-tags*='retail']"><button type="button">Retail</button></li>
              <li className={classes.dine} data-uk-filter-control="[data-tags*='dining']"><button type="button">Dining</button></li>
              <li className={classes.attr} data-uk-filter-control="[data-tags*='misc']"><button type="button">Miscellaneous</button></li>
              <li className={classes.serve} data-uk-filter-control="[data-tags*='services']"><button type="button">Services</button></li>
            </ul>

            <ul className={["js-filter", classes.filterContent].join(' ')}>
              {this.buslistingItems()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BuslistingsList;