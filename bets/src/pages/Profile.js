import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import PaymentInfo from "../components/PaymentInfo";
import SoccerNews from "../components/SoccerNews";


const Profile = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <PaymentInfo/>
            <SoccerNews/>
            </main>
        </div>
    </div>
    <hr></hr>
</div>
  
  );
  

export default Profile;