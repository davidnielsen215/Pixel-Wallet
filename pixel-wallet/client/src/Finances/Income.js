import React from 'react';

function Income(props) {
    return (
        <div>
            <h3>{props.income.title}</h3>
            <label>Income</label>
            <input
                onChange={() => props.editIncome(props.income._id, { completed: !props.income.completed })}
                type="checkbox"
                checked={props.income.completed}/>
            <button onClick={() => props.deleteIncome(props.income._id)}>X</button>
        </div>
    )
}

export default Income;
