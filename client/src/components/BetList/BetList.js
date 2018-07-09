import React, {Component} from 'react'
import "./BetList.css";

    
class BetList extends Component {
    state = {
        bets: [],
        isOpen: false,
        team: "",
        reputation: "",
        challangers: "",
        risky: "",
        cash: ""
    }

    componentDidMount(){
        // add a variable to the state for all of the bets `bets:[]`
        // axios call to get all bets > .then set the state of bets to the response
        // call method that displays the bets (you'll have to map over the results (probably?))
    }

    postBet(){
//create a new bet object using the values from the state         
        //axios POST request to the backend API endpoint
        
    }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


    toggleModal =()=>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return (
<div>
    {this.state.isOpen ? (<div><h1>HELLO WORLD</h1></div>) : ""}
    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Team</th>
            <th scope="col">Repuation</th>
            <th scope="col">Challanger</th>
            <th scope="col">Risk</th>
            <th scope="col">Win</th>
            <th scope="col">Accept Bet</th>
            </tr>
        </thead>
            <tbody>
                {/* {this.state.bets.map(bet => {
                    return ( <tr>
                <th scope="row">bet.team</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                })} */}
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td>125$</td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
                <tr>
                <th scope="row">Germany</th>
                <td>100</td>
                <td>BigBob23</td>
                <td>100</td>
                <td></td>
                <td>
                <button type="button" class="btn btn-primary">Accept</button>
                </td>
                </tr>
            </tbody>
    </table>
    {this.state.team}
    {this.state.reputation}
    {this.state.challangers}
    {this.state.risky}
    {this.state.isOpen ? (
        // let bet ={
        //     team: this.state.team
        // }
    <div>
        <h1>Place your bet</h1>
        <input type="text" id="team" name="team" value={this.state.team} onChange={event=>{
            this.handleInputChange(event)
        }}/>
        <input type="text" id="rep" name="reputation" value={this.state.reputation} onChange={event=>{
            this.handleInputChange(event)
        }}/>
        <input type="text" id="chall" name="challangers" value={this.state.challangers} onChange={event=>{
            this.handleInputChange(event)
        }}/>
        <input type="text" id="risk" name="risky" value={this.state.risky} onChange={event=>{
            this.handleInputChange(event)
        }}/>
        <input type="text" id="money" name="cash" value={this.state.cash} onChange={event=>{
            this.handleInputChange(event)
        }}/>
    </div>) : ""}
    <button 
        type="button" 
        className="btn btn-primary btn-lg btn-block"
        onClick={this.toggleModal}
        > Click here to Post Your own Bet</button>
    <hr></hr>
</div>
    
        )}//end render
};

export default BetList ;