import React from 'react'
import "./HomeNav.css";

const HomeNav = () =>  (
   
  <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
                <h2 className="display-5">Simply Sign Up</h2>
                <p className="lead">And see your Money grow.</p>
            </div>
            <div className="bg-light box-shadow mx-auto second-pic" >
                
            </div>
        </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Dont miss out on the action</h2>
            <p className="lead">Lock in your bets and be a winner too!</p>
        </div>
        <div className="bg-dark box-shadow mx-auto third-pic">
            
        </div>
    </div>
  </div>

)
export default HomeNav; 