import React, {Component } from 'react'
import { withContext } from "../AppContext"
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "./Login.css"
import "bootstrap/dist/css/bootstrap.css"
import {Link, withRouter } from "react-router-dom"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    reRoute = (e) => {
        this.props.history.push("/login")
    }
    clearInputs = () => {
    this.setState({
        username: "",
        password: "",
        errorMessage: ""
    })
}

    handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
        .then(() => {
            this.props.history.push("/profile")
        })
        .catch(err => {
            this.clearInputs()
            this.setState({errorMessage: "USERNAME ALREADY EXISTS"})
        })
}

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                <h1>PixelWallet</h1>
                    <h3 className="grey-text text-darken-3">Sign Up</h3>
                    <div className="input-field">

                    </div>
                    <FormGroup>
                        <label>Username</label>
                        <br></br>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        
                        autoComplete='off'/>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        autoComplete='off'/>
                    </FormGroup>
                    <button type="submit" className="btn-lg btn-dark">Create Account</button>
                    </form>
                    <br></br>
                    {
                        this.state.errorMessage &&
                        <p style={{color: "white"}}>{this.state.errorMessage}</p>
                    }
                    <br>
                    </br>
                    <div>Already have an account?</div>
                    <br></br>
                    <button className="btn btn-primary" onClick={this.reRoute}>Log In here</button>
            </div>
        )
    }
}

export default withContext(Signup)