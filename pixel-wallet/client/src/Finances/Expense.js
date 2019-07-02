import React from 'react';
function Expense(props) {
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
    <tr class="bg-primary">
      <th scope="row">Expense</th>
      <td>{props.expense.title.toUpperCase()}</td>
      <td>${props.expense.amount}</td>
      <th scope="col"><button className="btn-small btn-danger" onClick={() => props.deleteExpense(props.expense._id)}>delete</button></th>
    </tr>
   
  </tbody>
</table>
        
        </>
    )
}

export default Expense;
