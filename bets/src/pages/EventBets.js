import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";

const EventBets = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            here the content would go .. we could apply another components to plug in
            </main>
        </div>
    </div>
    {/* <HomeFooter/> */}
</div>
  
  );
  

export default EventBets;