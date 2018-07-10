import React from 'react'
import "./Games.css";
import image1 from "./images/France-Belgium-Size.jpg";
import image2 from "./images/Croatia-England-Size.jpg";
import games from "./games.json";



    const Games = () => {
      
    const pix = [image1, image2]
    
      const gamesArray = games.map((game, i) => {
      return (
        // <div class="row">
        //   <div className="col-md-6">
        <div className="panel panel-theme sizeing">
        {/* <!-- Default panel contents --> */}
          <img className="card-img-top" src={pix[i]} alt="Card image cap"/>
            <div className="panel-heading">
              <h3 className="panel-title">{game.name}</h3>
            </div>
        
        <div className="panel-body">
          <p>Betting Odds, Spread, info, info</p>
        </div>

        {/* <!-- List group --> */}
        <ul className="list-group">
          <li className="list-group-item gameStuff">{game.round}</li>
          <li className="list-group-item gameStuff">{game.date}</li>
          <li className="list-group-item gameStuff">{game.stadium}</li>
          <li className="list-group-item gameStuff">{game.referee}</li>
          <li className="list-group-item gameStuff">{game.match}</li>
        </ul>
      </div>
      // </div>
      // </div>
      )
    });


    return (
        <div className='container'>
          {gamesArray}
        </div>
    )
    
  };

export default Games;

/*
<div className="container">
        <div className="row">
    
          <div className="col-md-6">
                <div className="panel panel-theme">
        <img className="card-img-top" src={image1} alt="Card image cap"/>
        <div className="panel-heading">
          <h3 className="panel-title">France - Belgium</h3>
        </div>
        <div className="panel-body">
          <p>Betting Odds, Spread, info, info</p>
        </div>

        <ul className="list-group">
          <li className="list-group-item">World Cup Semi-Final</li>
          <li className="list-group-item">Tuesday July 10th, 2018</li>
          <li className="list-group-item">Krestovsky Stadium, Saint Petersburg</li>
          <li className="list-group-item">Referee - Andrés Cunha (Uruguay)</li>
          <li className="list-group-item">Match 61</li>
        </ul>
      </div>
    </div>

    <div className="col-md-6">
        <div className="panel panel-theme">
          <img className="card-img-top" src={image2} alt="Card image cap"/>
          <div className="panel-heading">
            <h3 className="panel-title">Croatia - England</h3>
          </div>  
          <div className="panel-body">
            <p>Betting Odds, Spread, info, info</p>
          </div>
  
          <ul className="list-group">
            <li className="list-group-item">World Cup Semi-Final</li>
            <li className="list-group-item">Wednesday July 11th, 2018</li>
            <li className="list-group-item">Luzhniki Stadium, Moscow</li>
            <li className="list-group-item">Referee - Cüneyt Çakır (Turkey)</li>
            <li className="list-group-item">Match 62</li>
          </ul>
        </div>
      </div>
  </div>  
</div>


*/