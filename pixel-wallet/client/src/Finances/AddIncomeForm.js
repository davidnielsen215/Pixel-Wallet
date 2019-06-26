import React, { Component } from 'react'

class AddIncomeForm extends Component {
    constructor() {
        super()
        this.state ={
            title: ""
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
            title: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addIncome(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add New Income</h4>

                    <input 
                        name="income-title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="title"
                    />
                    <button>add</button>
                </form>
            </div>
        )
    }
}

export default AddIncomeForm