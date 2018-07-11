import React from "react";
import NavBarV from "../components/NavbarV";
import HomeFooter from "../components/HomeFooter";
import NavbarTop from "../components/NavbarTop";
import BetsToConfirm from "../components/BetsToConfirm";
import BetsToPay from "../components/BetsToPay";
import BetsToReview from "../components/BetsToReview";

const PendingBizz = () => (
<div>
        <NavbarTop/>
    <div className="container-fluid"> 
        <div className="row">
          <NavBarV/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h3 className="someRoom">Bets to Confirm</h3>
            <BetsToConfirm/>
            <h3 className="someRoom">Bets to Pay</h3>
            <BetsToPay/>
            <h3 className="someRoom">Bets to Review</h3>
            <BetsToReview/>
            </main>
        </div>
    </div>
</div>
  
  );
  

export default PendingBizz;