import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import BetList from "../components/BetList/BetList";
import BetDetails from "../components/BetDetails/BetDetails";

const EventBets = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <BetDetails/>
            <BetList/>
            </main>
        </div>
    </div>
</div>
  
  );
  

export default EventBets;