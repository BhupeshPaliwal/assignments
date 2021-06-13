import './App.css';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function Nav() {
    const navstyle ={
        color:'white'
    }
    // let history= useHistory();
  return(  
     <nav>
        <h3> Welcome!</h3>
        <ul className="nav-links">
          <Link to="/profile" style={navstyle} > <li>Home</li> </Link>
           <Link to="/profileaboutme" style={navstyle}> <li>About Me</li></Link>
           <Link to="/profilecontactme" style={navstyle} ><li>Contact Me</li></Link>
            <Link to="/" style={navstyle} ><button /*onClick={()=>{history.push("/")}}*/>LOGOUT</button></Link> 
             
        </ul>
    </nav>
  )
}
export default Nav;

