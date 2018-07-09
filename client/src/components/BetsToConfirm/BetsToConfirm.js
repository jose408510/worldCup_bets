import React from 'react'


const BetsToConfirm = () => (

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
                <tr>
                <th scope="row">Germany vs Russia</th>
                <td>Germany</td>
                <td>chickenMan</td>
                <td>0/0 $0</td>
                <td>$100</td>
                <td>$1250</td>
                <td> <button type="button" class="btn btn-primary">Accept</button> </td>
                </tr>
            </tbody>
    </table>
</div>  )
  export default BetsToConfirm;
  