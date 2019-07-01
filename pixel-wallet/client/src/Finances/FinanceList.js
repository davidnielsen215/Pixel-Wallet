import React from 'react'
import Income from './Income'
import Expense from './Expense'
import AddIncomeForm from './AddIncomeForm'
import AddExpenseForm from './AddExpenseForm'
import { withContext } from '../AppContext'
import "./Financelist.css"

function FinanceList(props) {
    const incomes = props.incomes.map(income =>{
        return (
            <Income 
                key={income._id}
                income={income}
                editIncome={props.editIncome}
                deleteIncome={props.deleteIncome}
            />
        )
    })

    const expenses = props.expenses.map(expense => {
        return (
            <Expense 
                key={expense._id}
                expense={expense}
                editExpense={props.editExpense}
                deleteExpense={props.deleteExpense}
            />
        )
    })

    return (
        <form className="finance-list">
            <main>
                <AddIncomeForm addIncome={props.addIncome} />
                    <br></br>
                
                    <AddExpenseForm addExpense={props.addExpense} />
                
            </main>
        </form>
        
    )
}

export default withContext(FinanceList)