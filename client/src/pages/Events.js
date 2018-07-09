import React from "react";
import NavBar from "../components/Navbar";
import Games from "../components/Games";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import SoccerNews from "../components/SoccerNews";




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
                    Leaving this incase we want to add stuff here ... // for some reason when i remove import Games this text is gone
                    </div>
                </div>
                <SoccerNews/>

            </main>
        </div>
    </div>
      {/* <HomeFooter/> */}
</div>

);


export default Events;