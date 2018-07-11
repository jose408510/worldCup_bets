import React from "react";
import "./Navbar.css";


const Navbar = () => (

<nav className="col-md-2 d-none d-md-block bg-light sidebar">
<div className="sidebar-sticky">
  <ul className="nav flex-column">
    <li className="nav-item">
        <img src="https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b02a3183f461b46e831736317d69eed5&auto=format&fit=crop&w=150&q=80"
         alt="Avatar" className="avatar"/>
    </li>
    <li className="nav-item">
      <a className="nav-link active" href="#">
        <span data-feather="home"></span>
        User <h6 id="name">Bob Chicken</h6>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file"></span>
        Balance: <span id="balance">100.00</span>
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


export default Navbar;