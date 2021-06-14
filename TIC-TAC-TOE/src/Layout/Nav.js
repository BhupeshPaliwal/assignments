import React from 'react';


import { NavLink } from 'react-router-dom';
const navs = [
    {
        path:'/',
        name:'Home',
    },
    {
        path:'/About',
        name:'About',
    },
    {
        path:'/Contact',
        name:'Contact',
    },
    
];
const Nav =() => (

    <nav>
            <ul className='flex space-x-4 
            justify-left'>
                {navs.map((navItem) => (
                <li><NavLink exact to ={navItem.path}>
                     {navItem.name}

               
                </NavLink>
                </li>
                ))}
            </ul>
            
            <ul className='flex space-x-4 
            justify-end'>
                <li><NavLink exact to ='/Login'>Loqout</NavLink></li>
                </ul>
        </nav>
);

export default Nav;