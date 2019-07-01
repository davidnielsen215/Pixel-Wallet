import React, { Component } from 'react'
import './Financelist.css'
class AddIncomeForm extends Component {
    constructor() {
        super()
        this.state ={
            title: "",
            amount: "",
            type: "income"
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
            type: "income"
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addIncome(this.state)
            .then(response => {
                alert("Income Added")
            })
            .catch(err => console.log(err.response.data.message))
            this.clearInputs()
    }

    render() {
        return(
            <div className="item-holder">
                <form onSubmit={this.handleSubmit}>
                    <h4>Add New Income</h4>

                    <input 
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="description"
                        autoComplete='off'
                    />
                    <br></br>
                    <br></br>
                    <input 
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        type="number"
                        placeholder="amount"
                        autoComplete='off'
                    />
                    <br></br>
                    <br></br>
                    <button className="btn-dark">add</button>
                </form>
            </div>
        )
    }
}

export default AddIncomeForm