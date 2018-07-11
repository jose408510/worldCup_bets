import React, {Component} from 'react'
import './BetsToConfirm.css'

class BetsToConfirm extends Component {
    state = {
        rowHidden: false
    }

clearRow = () => {
this.setState({
    rowHidden: true
});
}
    

render(){
    return (


<div>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Event</th>
            <th scope="col">Your Team</th>
            <th scope="col">Challenger</th>
            <th scope="col">Challenger's Rep</th>
            <th scope="col">Risk</th>
            <th scope="col">Win</th>
            <th scope="col">Accept Bet!</th>
            </tr>
        </thead>
            <tbody>
                <tr style={{display: this.state.rowHidden ? 'none' : '' }}>
                <th scope="row">England vs Croatia</th>
                <td>England</td>
                <td>Bob Chicken</td>
                <td>0/0 $0</td>
                <td>$100</td>
                <td>$100</td>
                <td> <button type="button" class="btn btn-primary" onClick={this.clearRow}>Accept</button> </td>
                </tr>
            </tbody>
    </table>
</div>)


}

}
  export default BetsToConfirm;