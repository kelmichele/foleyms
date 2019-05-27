import React from "react";
import classes from "./About.scss";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phImage from "../../../assets/images/Foley-3073.jpg";
import ImageText from "../../../components/ImageText/ImageText";
import bodyImg3 from "../../../assets/images/Foley-3062.jpg";

import Slider1A from "../../../assets/images/mm-menus.jpg";
import Slider1B from "../../../assets/images/Foley-3058.jpg";
import Slider1C from "../../../assets/images/Foley-3000.jpg";
import Slider1D from "../../../assets/images/foley8.jpg";

import Slider2A from "../../../assets/images/modelTrain1.jpg";
import Slider2B from "../../../assets/images/modelTrain3.jpg";
import Slider2C from "../../../assets/images/Foley-3051.jpg";
import Slider2D from "../../../assets/images/railroad1.jpg";
import Slider2E from "../../../assets/images/Foley-3036.jpg";

import Aux from "../../../hoc/Aux/Aux";
// import Pdf from "../../../foley-walking-map.pdf";
import { Link } from "react-router-dom";

const textContent0 = (
  <div>
    <p><span>Among its traditional architecture and old-world style,</span><br /> downtown Foley features restaurants, gift shops, barbershops, antique markets, and even a 
    hidden spa for unwinding after a long day of shopping. With beautiful flowers dotting intersections, a streetlight lined seven-acre park, and the 
    colorful, hanging floral baskets, Foley captivates visitors and residents alike with its picturesque beauty.</p> 
  </div>
);

const textContent1 = (
  <div>
    <p className={classes.ShadowFloat}>Located at the heart of Baldwin County’s busiest intersection, with an average of forty-thousand cars per day, Foley has significant commercial appeal, 
      especially with its newly built pedestrian bridge connecting the shops of downtown with the park and city buildings allowing accessibility and walkability 
      for visitors and residents alike.
    </p>
    <Link to="/listings" className={classes.msLink}>View Available Property <span uk-icon="arrow-right"></span></Link>
  </div>
);

const about = () => {
  return (
    <Aux>
    <Helmet>
      <title>About the Foley Main Street District</title>
      <meta name="description" content="" />
      <body className={classes.aboutPage} />
    </Helmet>


    <div className={classes.aboutPage}>
      <PageHeader phImage={phImage} ovPacity="0" hColor="white" pageTitle="Main Street Foley" Pos="aboutHd"/>

      <div className={[classes.fullRow, classes.Sec1].join(' ')}>
        <div className={classes.insideNrw}>
          <div className={classes.intro}>
              <h1 className={classes.HomeH1}>
                {/* <span className={classes.sign}>Foley</span> <span className={classes.Toph1}>Main Street</span> */}
                The <span className={[classes.sign, classes.green].join(' ')}>Heart</span> <span className={classes.Toph1}>of the City</span>
              </h1>
            {textContent0}
          </div>

          <div className={classes.TextRow}>
            <p className={classes.Uno}>The newly remodeled vacant buildings and downtown revitalization add to this area’s appeal, thus attracting a plethora of new,
            diverse businesses and potential downtown housing. 
            Professional offices are sprinkled among the Main Street district, offering conveniences to the nearby residents. </p>
            <p className={classes.Dos}>It has also become a popular lunch destination due to its eclectic cuisine options,
            including Mediterranean, Italian, vegan, and Southern-style restaurants all within a stone’s throw of one another.
            Quaint coffee shops and local art shops can also be found in this charming area.</p>
          </div>
        </div>
      </div>

      <div className={classes.abBody}>
        <div className={[classes.ImgRow, classes.SlideAlt, "uk-position-relative uk-visible-toggle uk-light"].join(' ')} tabindex="-1" uk-slider="center: true; autoplay: true; autoplay-interval: 5000;">
          <div className={classes.insideAlt}>
            <ul className={[classes.ImgSlides, "uk-slider-items uk-grid"].join(' ')}>
              <li className={classes.SlideSize}><div className="uk-panel"><img src={Slider1A} alt="" /></div></li>
              <li className={classes.SlideSize}><div className="uk-panel"><img src={Slider1B} alt="" /></div></li>
              <li className={classes.SlideSize}><div className="uk-panel"><img src={Slider1C} alt="" /></div></li>
              <li className={classes.SlideSize}><div className="uk-panel"><img src={Slider1D} alt="" /></div></li>
            </ul>
            <button type="button" className={["uk-position-center-left uk-position-small uk-hidden-hover", classes.ArrowRules].join(' ')} href="#" data-uk-slidenav-previous data-uk-slider-item="previous">
              <span uk-icon="icon: chevron-left; ratio: 1.5"></span>
            </button>
            <button type="button" className={["uk-position-center-right uk-position-small uk-hidden-hover", classes.ArrowRules].join(' ')} href="#" data-uk-slidenav-next data-uk-slider-item="next">
              <span uk-icon="icon: chevron-right; ratio: 1.5"></span>
            </button>
          </div>
        </div>

        <div className={[classes.relTitle, classes.BgNone].join(' ')}>
          <div className={classes.insideNrw}>
            <div className={classes.TextBox}>
              <p>Brimming with history, downtown Foley is home to two city museums housed in their original, historic buildings, and an “old time” soda fountain drugstore
                that has donned the same corner since 1929. The Holmes Medical Museum is housed in Baldwin County’s first hospital, and showcases extensive displays of
                medical equipment and patient rooms as they would have been in the 1930s and ’40s. The Foley Railroad Museum includes a model train exhibit, antique train
                cars, and train rides around the park. It is housed in the Depot, which was built in 1909, and has been the hub of activity in the City for over 60 years.
              </p>
            </div>
          </div>
        </div>

        <div className={[classes.ImgRow, classes.noBg, "uk-position-relative uk-visible-toggle uk-dark"].join(' ')} tabindex="-1" uk-slideshow="autoplay: true; autoplay-interval: 5000;">
            <div className={classes.insideAlt}>
              <ul className="uk-slideshow-items">
              {/* <ul className={[classes.ImgSlides, "uk-slider-items uk-grid"].join(' ')}> */}
                <li className={classes.SlideSizeX}><div className="uk-panel"><img src={Slider2A} alt="" /></div></li>
                <li className={classes.SlideSizeX}><div className="uk-panel"><img src={Slider2D} alt="" /></div></li>
                <li className={classes.SlideSizeX}><div className="uk-panel"><img src={Slider2B} alt="" /></div></li>
                <li className={classes.SlideSizeX}><div className="uk-panel"><img src={Slider2C} alt="" /></div></li>
                <li className={classes.SlideSizeX}><div className="uk-panel"><img src={Slider2E} alt="" /></div></li>
              </ul>
            </div>
            <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

          </div>

        <div className={[classes.fullRow, classes.Sec2].join(' ')}>
          <div className={classes.insideNrw}>
            <p>Downtown Foley is also home to the Wilbourne Antique Rose Trail, which follows the route of the Louisville and Nashville Railroad into downtown Foley.
              You can walk the landscaped trail while enjoying the beauty and fragrance of hundreds of roses displayed in a variety of sizes and color.
            </p>
          </div>
        </div>

        <div className={classes.med2Def}>            
          <ImageText textContent={textContent1} image={bodyImg3} addPadd="xmid" textFloat="textRight" lessPadd="less" gridType="ABcustom"/>
          <div className={classes.spacer3} />
        </div>
      </div>
    </div>
    </Aux>
  );
};

export default about;