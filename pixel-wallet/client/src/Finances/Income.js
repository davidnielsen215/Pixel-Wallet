import React from 'react';

function Income(props) {
    return (
        <div>
            <h1>{props.income.title}</h1>
            <h2>{props.income.amount}</h2>
            <h3>{props.income.type}</h3>

            <button onClick={() => props.deleteIncome(props.income._id)}>delete</button>

        </div>
    )
}

export default Income;
