import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import BetListTwo from "../components/BetListTwo";
import BetDetails from "../components/BetDetails/BetDetails";
import BetDetailsTwo from "../components/BetDetailsTwo/BetDetailsTwo";

const EventBetsTwo = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <BetDetailsTwo/>
            <BetListTwo/>
            </main>
        </div>
    </div>
</div>
  
  );
  

export default EventBetsTwo;