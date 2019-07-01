import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Navbar from "./Navbar"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"
import FinanceList from "./Finances/FinanceList"
import ProtectedRoute from "./Auth/ProtectedRoute"
import Profile from './Profile'

function App() {

    return(
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <ProtectedRoute path="/finance" component={FinanceList}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/" render={() => <Redirect to ="/finance"/>}/>
            </Switch>
        </div>
    )
}

export default App