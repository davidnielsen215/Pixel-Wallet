import React, { Component } from 'react'
import { withContext } from '../AppContext'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "./Login.css"
import "bootstrap/dist/css/bootstrap.css"
import {Link, withRouter, Route } from "react-router-dom"

class LoginForm extends Component {
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

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    reRoute = (e) => {
        this.props.history.push("/signup")
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => {
                this.props.history.push("/finance")
            })
            .catch(err => {
                console.log(err)
                this.clearInputs()
                this.setState({errorMessage: "Username or Password are Incorrect"})
            })
    }

    render() {
        return (
            <>
       
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} >
                    <h1 className="pixel-wallet">Pixel Wallet</h1>
                    <h3 className="grey-text text-darken-3">Log in</h3>
                    <div className="input-field">
                        <span class="badge badge-danger">{this.state.errorMessage}</span>

                    </div>
                    <FormGroup>
                        <label className='username'>Username</label>
                        
                        <br></br>
                    <input className="login-input"
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text" 
                        autoComplete='off'
                        />
                        
                    <br></br>
                    <label className="password">Password</label>
                    <br></br>
                    <input className="login-input"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        autoComplete='off'/>
                        
                    </FormGroup>
                    <div className="button-container">
                        <button type="submit" className="btn-block btn-lg btn-dark">Log In
                    </button></div>
                    
                    
                    </form>
                    <br></br>
                    
                    <div className="question"> Don't have an account? <button className="btn-small btn-primary" onClick={this.reRoute}>Sign Up Here!</button></div>
                    
            
            </div>
            
            </>
        )
    }
}

export default withContext(LoginForm)