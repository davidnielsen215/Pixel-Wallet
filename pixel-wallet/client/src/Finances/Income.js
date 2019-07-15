import React from 'react';

function Income(props) {
    return (
        <>
            <table class="table table-bordered table-dark">
  <thead>
    <tr>
    <th scope="col">TYPE</th>
    <th scope="col">DESCRIPTION</th>
    <th scope="col">AMOUNT</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-info">
      <th scope="row">Income</th>
      <td>{props.income.title.toUpperCase()}</td>
      <td>${props.income.amount}</td>
      <th scope="col"><button className="btn-small btn-danger" onClick={() => props.deleteIncome(props.income._id)}>delete</button></th>
    </tr>
   
  </tbody>
</table>

        </>
    )
}

export default Income;
