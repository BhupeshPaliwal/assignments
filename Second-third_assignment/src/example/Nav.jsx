import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navstyle ={
        color:'white'
    }
    
  return(  
     <nav>
        <h3> Welcome!</h3>
        <ul className="nav-links">
          <Link to="/a" style={navstyle} > <li>Home</li> </Link>
           <Link to="/aabout" style={navstyle}> <li>About Me</li></Link>
           <Link to="/acontact" style={navstyle} ><li>Contact Me</li></Link>
            
             
        </ul>
    </nav>
  )
}
export default Nav;

