import React from 'react';
import { NavLink } from 'react-router-dom';

// { Link } component doe snot have activeStyle

function Navbar() {
    return (
        <nav>
        <h4> Lab Wiki Countries </h4>
            <ul>
               <li>
                <NavLink activeStyle={{color: "red"}} exact to='/'>Home</NavLink>
               </li> 
                <li>
                <NavLink activeStyle={{color: "red"}} to='/about'>About</NavLink>
               </li> 
                <li>
                 <NavLink activeStyle={{color: "red"}} to='/contactme'>Contact Me</NavLink>
               </li> 
               <li>
                 <NavLink activeStyle={{color: "red"}} to='/projects'>Projects</NavLink>
               </li> 
            </ul>
        </nav>
    )
}

export default Navbar;