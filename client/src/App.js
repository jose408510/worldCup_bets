import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Events from "./pages/Events";
import EventBets from "./pages/EventBets"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import UserPage from "./pages/UserPage"
import './App.css';
import PaymentConfirmation from './pages/PaymentConfirmation';
import PendingBiz from './pages/PendingBiz';
import EventBetsTwo from './pages/EventBetsTwo';
import PendingBizz from './pages/PendingBizz';



const App  = () => (
  <Router>
    <div>
        <Route exact path="/events" component={Events} />
        <Route exact path="/eventbets" component={EventBets} />
        <Route exact path="/EventBetsTwo" component={EventBetsTwo} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/AddFunds" component={PaymentConfirmation} />
        <Route exact path="/PendingBiz" component={PendingBiz} />
        <Route exact path="/PendingBizz" component={PendingBizz} />
    </div>
  </Router>    
);

export default App;