import React from 'react'
import Income from './Income'
import Expense from './Expense'
import AddIncomeForm from './AddIncomeForm'
import AddExpenseForm from './AddExpenseForm'
import { withContext } from '../AppContext'

function FinanceList(props) {
    console.log('fired')
    console.log(props)
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
        <main>
            <AddIncomeForm addIncome={props.addIncome} />
            {incomes}
            <AddExpenseForm addExpense={props.addExpense} />
            {expenses}
        </main>
    )
}

export default withContext(FinanceList)