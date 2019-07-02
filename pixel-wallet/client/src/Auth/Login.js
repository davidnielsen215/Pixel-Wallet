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
                this.props.history.push("/profile")
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
                    <h1>PixelWallet</h1>
                    <h3 className="grey-text text-darken-3">Log in</h3>
                    <div className="input-field">

                    </div>
                    <FormGroup>
                        <label >Username</label>
                        
                        <br></br>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text" 
                        autoComplete='off'
                        />
                        
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        autoComplete='off'/>
                        <br></br>
                    </FormGroup>

                    <button type="submit"
                            className="btn-lg btn-dark">View Finances
                    </button>
                    </form>
                    <br></br>
                    {
                        this.state.errorMessage &&
                        <div class="alert alert-danger " role="alert">{this.state.errorMessage}</div>
                    }
                    <br></br>
                    <div>Don't have an account?</div>
                    <br></br>
                    <button className="btn btn-success" onClick={this.reRoute}>Sign Up Here!</button>
            
            </div>
            
            </>
        )
    }
}

export default withContext(LoginForm)