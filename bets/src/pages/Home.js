import React from 'react';
import HomeNav from "../components/HomeNav";
import HomeFooter from "../components/HomeFooter";

const Home = () =>  (
      
    <div>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
          </div>
        </nav>
    
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light first-pic">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Bets made simple</h1>
            <p className="lead font-weight-normal">Revolutinizing the way bets are made, Letsbet apps brings the Power of betting at your fingertips </p>
            <a className="btn btn-outline-secondary" href="#">Coming soon</a>
          </div>
        </div>
        <HomeNav/>
        <HomeFooter/>    
    </div>
     
)
  

export default Home;