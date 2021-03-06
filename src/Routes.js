import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BeerList from "./Pages/BeerList";
import Home from "./Pages/Home";
import Navigation from "./Navigation";
import Cart from "./Pages/Cart";
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/beerlist" component={BeerList} />
        <Route exact path="/cart" component={Cart} />
      </Router>
    </>
  );
};

export default Routes;
