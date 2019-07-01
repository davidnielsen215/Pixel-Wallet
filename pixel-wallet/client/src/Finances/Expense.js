import React from 'react';
function Expense(props) {
    return (
        <>
        <div  className="item-holder">
            <h2>{props.expense.title}</h2>   
            <h4>$ {props.expense.amount}</h4>
            {/* <h2>{props.expense.type}</h2> */}

            <button className="btn-dark" onClick={() => props.deleteExpense(props.expense._id)}>delete</button>
        </div>
        
        </>
    )
}

export default Expense;
