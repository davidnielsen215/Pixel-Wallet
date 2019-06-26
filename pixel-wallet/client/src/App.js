import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Navbar from "./Navbar"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"
import FinanceList from "./Finances/FinanceList"

function App() {
    return(
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="finance" component={FinanceList}/>
                <Route path="/" render={() => <Redirect to ="/finance"/>}/>
            </Switch>
        </div>
    )
}

export default App