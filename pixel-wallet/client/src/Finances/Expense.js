import React from 'react';

function Expense(props) {
    return (
        <div>
            <h2>{props.expense.title}</h2>
            
           <h2>{props.expense.expenses}</h2>
            <button onClick={() => props.deleteExpense(props.expense._id)}>delete</button>
        </div>
    )
}

export default Expense;
