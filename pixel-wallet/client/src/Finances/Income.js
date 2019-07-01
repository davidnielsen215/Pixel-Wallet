import React from 'react';
function Income(props) {
    return (
        <>
        <div className="item-holder">
            <h2>{props.income.title}</h2>
            <h4>$ {props.income.amount}</h4>
            {/* <h2>{props.income.type}</h2> */}
            <button className="btn-dark" onClick={() => props.deleteIncome(props.income._id)}>delete</button>
        </div>
        
        </>
    )
}

export default Income;
