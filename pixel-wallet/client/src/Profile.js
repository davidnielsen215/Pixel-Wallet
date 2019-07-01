import React, {Component} from 'react'
import { withContext } from "./AppContext"
import Income from './Finances//Income'
import Expense from './Finances/Expense'
import { Link, withRouter } from "react-router-dom";
import './profile.css'



class Profile extends Component {
    componentDidMount(){
        this.props.getFinances()
    }
    reRoute = (e) => {
        this.props.history.push("/finance")
    }
    
    render(){
        
        const totalIncomes = this.props.incomes.reduce((a,b) => a + Number(b.amount), 0) 
        const totalExpenses = this.props.expenses.reduce((a,b) => a + Number(b.amount), 0 )
        const difference = parseInt(totalIncomes) - parseInt(totalExpenses)
        const days = 30
        const spendingLimit = (parseInt(difference) / days).toFixed(2)
        const incomes = this.props.incomes.map(income =>{
            return (
                <Income 
                    key={income._id}
                    income={income}
                    editIncome={this.props.editIncome}
                    deleteIncome={this.props.deleteIncome}
                />
            )
        })
        const expenses = this.props.expenses.map(expense => {
            return (
                <Expense 
                    key={expense._id}
                    expense={expense}
                    editExpense={this.props.editExpense}
                    deleteExpense={this.props.deleteExpense}
                />
            )
        })
        
        return (
            <>
            <h1 className="main-title">
                INCOME 
            </h1>
            <h1 className="main-title">
                EXPENSE
            </h1>
            <div className='finance-container'>
                <div className="income-container">
                    {incomes}
                </div>
            
                <div className="expense-container">
                    {expenses}
                </div>
                
            </div>
            <div className="total-container">
              <div className="total-income">
                    Total Income = ${totalIncomes}
                </div>
                <div className="total-expense">
                    Total Expenses = ${totalExpenses}
                </div>
                
            </div>
            
            <div className="daily-limit">
            <h4>Daily Spending Limit</h4>
               <h1>${spendingLimit}</h1> 
            </div>
            <br></br>
            {/* <div className="button">
                <Link to="/finance">Add Finances</Link>
            </div> */}
           <button className="btn-lg btn-primary" onClick={this.reRoute}>Edit Finances</button>
           <br></br>
           <br></br>
            </>
        )
    }
}
    
    
    

export default withContext(Profile)