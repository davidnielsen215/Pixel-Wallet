import React, { Component } from 'react'

class AddExpenseForm extends Component {
    constructor() {
        super()
        this.state ={
            title: "",
            amount: "",
            type: "expense"
        }
    }

    handleChange = (e) => {
        e.persist()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            title: "",
            amount: "",
            type: "expense"
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addExpense(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add New Expense</h4>

                    <input 
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="title"
                        autoComplete='off'
                    />
                    <input 
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        type="number"
                        placeholder="amount"
                        autoComplete='off'
                    />
            
                    <button>add</button>
                </form>
            </div>
        )
    }
}

export default AddExpenseForm