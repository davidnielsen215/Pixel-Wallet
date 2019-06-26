import React from 'react';

function Expense(props) {
    return (
        <div>
            <h3>{props.expense.title}</h3>
            <label>Expense</label>
            <input
                onChange={() => props.editExpense(props.expense._id, { completed: !props.expense.completed })}
                type="checkbox"
                checked={props.expense.completed}/>
            <button onClick={() => props.deleteExpense(props.expense._id)}>delete</button>
        </div>
    )
}

export default Expense;
