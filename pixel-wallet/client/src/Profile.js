import React from 'react'
import { withContext } from "./AppContext";


function Profile () {
    return (
        <div>
            <h1>Welcome, User</h1>
        </div>
    )
}

export default withContext(Profile)