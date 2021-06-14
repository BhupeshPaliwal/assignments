import React from 'react';
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

import {Home, About, Contact} from './pages/Index';
import { Nav } from './layout';

function App() {
  return (
  <Router>
   <Nav />
    <Switch>

     <Route path='/About'>
    <About />
    </Route> 
 
      <Route path='/Contact'>
    <Contact />
    </Route> 
    
    <Route path='/'>
    <Home />
    </Route> 
    <Route path='/Login'>
    <Login />
    </Route>

      
       </Switch>
    </Router>
    );
}

export default App;
