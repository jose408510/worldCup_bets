import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import PaymentInfo from "../components/PaymentInfo";


const Profile = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <PaymentInfo/>  
            </main>
        </div>
    </div>
    <hr></hr>
    {/* <HomeFooter/> */}
</div>
  
  );
  

export default Profile;