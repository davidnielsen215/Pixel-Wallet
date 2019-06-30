import React from 'react';
function Expense(props) {
    return (
        <>
        <div>
            <h2>{props.expense.title}</h2>   
            <h2>{props.expense.amount}</h2>
            {/* <h2>{props.expense.type}</h2> */}

            <button onClick={() => props.deleteExpense(props.expense._id)}>delete</button>
        </div>
        
        </>
    )
}

export default Expense;
