import React from "react";
import classes from "./Filter.scss";

const filter = () => {
  return(
    <div data-uk-filter="target: .js-filter">
      <ul className={classes.filterList}>
        <li className="uk-active" data-uk-filter-control="[data-tags*='all']"><button type="button">All</button></li>
        <li className={classes.shop} data-uk-filter-control="[data-tags*='shopping']"><button type="button">Shopping</button></li>
        <li className={classes.dine} data-uk-filter-control="[data-tags*='dining']"><button type="button">Dining</button></li>
        <li className={classes.attr} data-uk-filter-control="[data-tags*='misc']"><button type="button">Miscellaneous</button></li>
        <li className={classes.serve} data-uk-filter-control="[data-tags*='services']"><button type="button">Services</button></li>
        {/* <li data-uk-filter-control="[data-tags*='accommodations']"><button type="button">Accommodations</button></li>  */}
      </ul>

      <ul className={["js-filter", classes.filterContent].join(' ')}>
        <li data-tags="all shopping">Action Game and Movie</li>
        <li data-tags="all shopping">Antiques on Alston Street</li>
        <li data-tags="all services">Baldwin County Satllite Courthouse, Foley, AL</li>
        <li data-tags="all shopping">Book Exchange of Foley</li>
        <li data-tags="all shopping">Bungalows</li>
        <li data-tags="all services">City of Foley City Hall</li>
        <li data-tags="all dining">Copper Kettle Teabar</li>
        <li data-tags="all dining">Desmond’s Taste of Jamaica</li>
        <li data-tags="all dining">Foley Coffee Shop</li>
        <li data-tags="all services">Foley Fire Department</li>
        <li data-tags="all dining">Foley Fish Company</li>
        <li data-tags="all misc">Foley Model Train Exhibit</li>
        <li data-tags="all services">Foley Police Department</li>
        <li data-tags="all services">Foley Public Library</li>
        <li data-tags="all misc">Foley Railroad Museum</li>
        <li data-tags="all services">Foley Senior Center</li>
        <li data-tags="all shopping">Forrest and Jenny’s Yard Art</li>
        <li data-tags="all shopping">Gift Horse Antique Centre</li>
        <li data-tags="all shopping">Gift Horse Antique Stalls</li>
        <li data-tags="all dining">Gift Horse Restaurant</li>
        <li data-tags="all shopping">Gospel Lighthouse Bible Book Center</li>
        <li data-tags="all dining">GypsyQueen Java</li>
        <li data-tags="all shopping">Hollis Ole Crush Antique Mall</li>
        <li data-tags="all misc">Holmes Medical Museum</li>
        <li data-tags="all dining">Hunan Chinese Restaurant</li>
        <li data-tags="all shopping">Jan’s Art Studio</li>
        <li data-tags="all dining">John’s Gyro</li>
        <li data-tags="all shopping">Let’s Get Grillin’ Meats</li>
        <li data-tags="all dining">Mamma Mia Pizzeria</li>
        <li data-tags="all shopping">Manning Jewelry</li>
        <li data-tags="all shopping">Morning Glory Creations</li>
        <li data-tags="all shopping">Old Armory Antique Mall</li>
        <li data-tags="all dining">Portabella’s Restaurant</li>
        <li data-tags="all shopping">Sew So Cute</li>
        <li data-tags="all services">South Baldwin Chamber of Commerce</li>
        <li data-tags="all services">Sugared- Natural Skin Care</li>
        <li data-tags="all shopping">Things Remembered Once Again</li>
        <li data-tags="all services">U.S. Post Office, Foley, AL</li>
        <li data-tags="all shopping">Waterfront Rescue Mission</li>
      </ul>
    </div>
  );
}
export default filter;