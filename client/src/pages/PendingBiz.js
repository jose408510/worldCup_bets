import React from "react";
import NavBar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import BetList from "../components/BetList/BetList";
import BetDetails from "../components/BetDetails/BetDetails";
import BetsToConfirm from "../components/BetsToConfirm";
import BetsToPay from "../components/BetsToPay";
import BetsToReview from "../components/BetsToReview";

const PendingBiz = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <BetDetails/>
            <h3>Bets to Confirm</h3>
            <BetsToConfirm/>
            <h3>Bets to Pay</h3>
            <BetsToPay/>
            <h3>Bets to Review</h3>
            <BetsToReview/>
            </main>
        </div>
    </div>
</div>
  
  );
  

export default PendingBiz;