import React from 'react';
import logo from "./favicon3.png";
import "./navbar.scss";


function Navbar(props) {
    return (
       <nav className="navbar">
         <img src={logo} alt="mylogo" />
         <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">.Home</a>
          </li>
          <li>
            <a href="/" className="nav-link">.About</a>
          </li>
          <li>
            <a href="/" className="nav-link">.Contact</a>
          </li>
         </ul>
       </nav>
    );
}

export default Navbar;