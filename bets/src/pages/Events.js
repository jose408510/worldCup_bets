import React from "react";
import NavBar from "../components/Navbar";
import Games from "../components/Games";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";



const Events = () => (
<div>
<NavbarTop/>
<div className="container-fluid"> 
  <div className="row">
    <NavBar/>
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Possible Bets</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
            </button>
            </div>
        </div>
      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
       <h2>Section title</h2>
      <Games/>
    </main>
  </div>
  <HomeFooter/>
</div>
</div>

);


export default Events;