import React, { Component } from 'react'

class AddExpenseForm extends Component {
    constructor() {
        super()
        this.state ={
            title: "",
            expenses: ""
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
            expenses: ""
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
                    />
                    <input 
                        name="expenses"
                        value={this.state.expenses}
                        onChange={this.handleChange}
                        type="number"
                        placeholder="amount"
                    />
                    <button>add</button>
                </form>
            </div>
        )
    }
}

export default AddExpenseForm