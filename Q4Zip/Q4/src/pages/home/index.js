import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import HomePage2 from "./HomePage2";


function index(props) {
  return (
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={HomePage} />
      <Route path="/2" component={HomePage2} />
    </Switch>
  );
}

export default index;