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
        return (

        <div className="item-holder">
            <form onSubmit={this.handleSubmit}>
                    <h2>Add New Income</h2>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">type</span>
                    </div>
                        <input 
                            className="item-description"
                            name="title"
                            value={this.state.title}
                            type="text" 
                            onChange={this.handleChange}
                            class="form-control" 
                            autoComplete='off'
                            id="basic-url" 
                            aria-describedby="basic-addon3"/>
                        <div class="input-group-append">
                            <span class="input-group-text">___</span>
                        </div>
                </div>
                    
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                            <span class="input-group-text">    $$$   </span>
                </div>
                        <input 
                            className="dollar-input"
                            name="amount"
                            type="number" 
                            value={this.state.amount}
                            onChange={this.handleChange}
                            class="form-control" 
                            autoComplete='off'
                            aria-label="Amount (to the nearest dollar)">
                        </input>
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                </div>
                <button className="btn btn-primary btn-block">Add</button>
                
            </form>
        </div>

            
            
    
                


                
            
            
        )
    }
}

export default AddIncomeForm