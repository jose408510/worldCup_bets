import React from "react";
import "./Navbar.css";


const Navbar = () => (

<nav className="col-md-2 d-none d-md-block bg-light sidebar">
<div className="sidebar-sticky">
  <ul className="nav flex-column">
    <li className="nav-item">
      <a className="nav-link active" href="#">
        <span data-feather="home"></span>
        User <span className="sr-only">(current)</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file"></span>
        Balance
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="shopping-cart"></span>
        Add Funds
      </a>
    </li>
  </ul>
  <ul className="nav flex-column mb-2">
  <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file"></span>
        Update Profile
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="shopping-cart"></span>
        History
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="shopping-cart"></span>
        Logout
      </a>
    </li>
  </ul>
</div>
</nav>

);


export default Navbar;