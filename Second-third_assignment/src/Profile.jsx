import './App.css';
import React from 'react';
import Nav from './Nav.jsx';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './Login';

function Profile() {
  return (
  <Router>
 
    
    <Route path="/" exact component={Login}/>
    <Route path="/profile" component={Nav}/>
    <Route path="/profileaboutme" component={About}/>
    <Route path="/profilecontactme" component={Contact}/>
   
    
    
    
    </Router>

  );
}
// const Home = ()=> {
//  return( <h1 className='al' >Home Page</h1> )
// }
export default Profile;
