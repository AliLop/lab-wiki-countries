import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
        <h4> WikiCountries </h4>
            <ul>
               <li>
                <NavLink activeStyle={{color: "red"}} exact to='/'>Home</NavLink>
               </li> 
               <li>
                 <NavLink activeStyle={{color: "red"}} to='/countries'>Countries</NavLink>
               </li> 
            </ul>
        </nav>
    )
}

export default Navbar;