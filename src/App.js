import React, { Component } from 'react';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here

import { withRouter, Route, Switch } from "react-router-dom";
import classes from './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./hoc/Content/Content";
import Home from "./hoc/Pages/Home/Home";
import About from "./hoc/Pages/About/About";
import Board from "./hoc/Pages/About/Board";
import Contact from "./hoc/Pages/About/Contact";
import Events from "./hoc/Pages/Events/Events";
import Listings from "./hoc/Pages/Listings/Listings";
import BuslistingsListLoader from "./components/BusTable/BuslistingsListLoader";
import BuslistingDetailsLoader from "./components/BusTable/BuslistingDetailsLoader";
import Calendar from "./components/Calendar/Calendar";
import PressRelease from "./hoc/Pages/About/PressRelease";
import NewsCenter from "./hoc/Pages/NewsCenter/NewsCenter";
import NewsPosts from "./components/NewsPosts/NewsPosts";

import Amplify, { } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/board" component={Board} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/press-release" component={PressRelease} />
        <Route path="/news-center" component={NewsCenter} />

        <Route path="/listings" component={Listings} />
        <Route path="/directory" exact component={BuslistingsListLoader} />
        {/* <Route
          path="/buslistings/:buslistingId"
          render={() => <div><NavLink to='/table' className={classes.BackTo}>Back to Buslistings list</NavLink></div>}
        /> */}
        <Route
          path="/buslistings/:buslistingId"
          render={props => <BuslistingDetailsLoader id={props.match.params.buslistingId} />}
        />
      </Switch>
    );

    const Cal = (props) => {
      const { location } = props;
      if (!location.pathname.match(/events/)) {
        return (
          <div className={classes.CalNot}>
            <Calendar />
          </div>
        );
      }
      return (
        <div className={classes.Cal}>
          <Calendar />
        </div>
      )
    }
    const SneakyCal = withRouter(Cal);
    
    
    // News Center Test
    const News = (props) => {
      const { location } = props;
      if (!location.pathname.match(/news-center/)) {
        return (
          <div className={classes.NewsNot}>
            <NewsPosts />
          </div>            
        );
      }
      return (
        <div className={classes.News}>
          <NewsPosts />
        </div>
      )
    }
    const SneakyNews = withRouter(News);
    
    return (
      <div className="App">
        <Header />
        <div className={classes.boxedBody}>
          <Content>{routes}
            <SneakyCal />
            <SneakyNews />
          </Content>
          
        </div>
        <Footer />
        <ScrollUpButton 
          ContainerClassName={classes.ToTopBtn}
          TransitionClassName="MyOverRideTransitionedClass" 
          style={{ fill: 'rgb(255,255,255)', color: '#008AAB', backgroundColor: 'rgb(0,138,171)', width:'20px', padding: '0px 5px'}}
          EasingType='linear'
        />
      </div>
    );
  }
}

export default App;