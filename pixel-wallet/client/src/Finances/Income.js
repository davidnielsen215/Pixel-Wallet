import React from 'react';
function Income(props) {
    return (
        <>
        <div>
            <h2>{props.income.title}</h2>
            <h2>{props.income.amount}</h2>
            {/* <h2>{props.income.type}</h2> */}
            <button onClick={() => props.deleteIncome(props.income._id)}>delete</button>
        </div>
        
        </>
    )
}

export default Income;
