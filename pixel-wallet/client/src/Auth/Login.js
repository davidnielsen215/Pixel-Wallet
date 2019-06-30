import React, { Component } from 'react'
import { withContext } from '../AppContext'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "./Login.css"
import "bootstrap/dist/css/bootstrap.css"

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
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => {
                this.props.history.push("/profile")
            })
            .catch(err => {
                console.log(err)
                this.clearInputs()
                this.setState({errorMessage: "Username or password are incorrect"})
            })
    }

    render() {
        return (
            <>
       
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} >
                    <h1>PixelWallet</h1>
                    <h2 className="grey-text text-darken-3">Log in</h2>
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
                        <br></br>
                    </FormGroup>

                    <button type="submit"
                            className="btn-lg btn-dark btn-block">
                        Submit
                    </button>
                    </form>
                    <br></br>
                    {
                        this.state.errorMessage &&
                        <p style={{color: "white"}}>{this.state.errorMessage}</p>
                    }
            </div>
            </>
        )
    }
}

export default withContext(LoginForm)