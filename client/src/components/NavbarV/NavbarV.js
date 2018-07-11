import React from "react";
import "./NavbarV.css";


const NavbarV = () => (

<nav className="col-md-2 d-none d-md-block bg-light sidebar">
<div className="sidebar-sticky">
  <ul className="nav flex-column">
    <li className="nav-item">
        <img src="https://images.unsplash.com/photo-1530041653543-6b9fad4f9c6d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7fb839d5c9ba762ee7e487bb5ba0554&auto=format&fit=crop&w=150&q=80"
         alt="Avatar" className="avatar"/>
    </li>
    <li className="nav-item">
      <a className="nav-link active" href="#">
        <span data-feather="home"></span>
        User <h6 id="name">V_dog</h6>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file"></span>
        Balance: <span id="balance">10,000.00</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/AddFunds">
        <span data-feather="shopping-cart"></span>
        Add Funds
      </a>
    </li>
  </ul>
  <ul className="nav flex-column mb-2">
  <li className="nav-item">
      <a className="nav-link" href="/profile">
        <span data-feather="file"></span>
        Update Profile
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/Pendingbiz">
        <span data-feather="shopping-cart"></span>
        Pending Transactions
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/events">
        <span data-feather="shopping-cart"></span>
        Events
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/home">
        <span data-feather="shopping-cart"></span>
        Logout
      </a>
    </li>
  </ul>
</div>
</nav>

);


export default NavbarV;