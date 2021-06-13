import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => (

  <nav>
    <li><NavLink to="/home" activeClassName="selected">Home</NavLink></li>
    <li><NavLink to="/about" activeClassName="selected">About Me</NavLink></li>
    <li><NavLink to="/contact" activeClassName="selected">Contact Us</NavLink></li>
    <li className="logout" activeClassName="selected"><NavLink to="/">Logout</NavLink></li>
  </nav>

  );

export default Nav;