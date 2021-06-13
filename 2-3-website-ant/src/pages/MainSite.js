import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AboutMePage from "./AboutMePage";

const MainSite = () => (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginPage} />				
				<Route exact path="/about" component={AboutMePage} />
				<Route exact path="/contact" component={ContactPage} />
				<Route exact path="/home" component={HomePage} />
			</Switch>	
		</Router>
	);	

export default MainSite;
//()=><HomePage authorized={true}/> for authorize stuff