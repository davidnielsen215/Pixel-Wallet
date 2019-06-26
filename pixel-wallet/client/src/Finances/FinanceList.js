import React from 'react'
import Income from './Income'
import Expense from './Expense'
import AddIncomeForm from './AddIncomeForm'
import AddExpenseForm from './AddExpenseForm'
import { withContext } from '../AppContext'

function FinanceList(props) {
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

    return (
        <main>
            <AddExpenseForm addExpense={props.addExpense} />
            {expenses}
            <AddIncomeForm addIncome={props.addIncome} />
            {incomes}
        </main>
    )
}

export default withContext(FinanceList)