import React from 'react'


const BetsToPay = () => (

<div>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Event</th>
            <th scope="col">Your Team</th>
            <th scope="col">Challenger</th>
            <th scope="col">Did they pay?</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                <th scope="row">Germany vs Russia</th>
                <td>Germany</td>
                <td>chickenMan</td>
                <td> <button type="button" class="btn btn-primary">Yep!</button> <button type="button" class="btn btn-danger">Nope!</button> </td>
                </tr>
            </tbody>
    </table>
</div>  )
  export default BetsToPay;
  