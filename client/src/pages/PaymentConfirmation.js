import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import Credit from "../components/Credit";


const PaymentConfirmation = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Credit/>
            </main>
        </div>
    </div>
    <hr></hr>
</div>
  
  );
  

export default PaymentConfirmation;