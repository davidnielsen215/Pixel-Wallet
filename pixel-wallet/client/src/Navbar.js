import React from 'react';
import { withContext } from "./AppContext";
import { Link, withRouter } from "react-router-dom";


function Navbar(props) {

    const logoutButton = () => {
        props.logout()
        props.history.push('/login')
    }


    return (
        <nav className="navbar-wrapper">

            {
                !props.token ?
                    <React.Fragment>
                        <button className="btn-small  btn-primary" >
                        <Link className="nav-link" to="/signup">Create Account</Link>
                        </button>

                        <button className="btn-small  btn-primary">
                            <Link className="nav-link" to="/login">Use Existing Account</Link>
                        </button>

                    </React.Fragment>
                :
                    <React.Fragment>
                        
                        <div className="nav-link" >
                            <Link className="btn-lg btn-primary"to="/finance">Finances</Link>
                        </div>

                        <div className="nav-link" >
                            <Link className="btn-lg btn-primary" to="/profile">Profile</Link>
                        </div>
                       
                        

                        <div className="nav-link">
                            <span onClick={logoutButton} className="btn-lg btn-success">
                                Logout</span>
                        </div>
                    </React.Fragment>
            }
        </nav>
    )
}

export default withRouter(withContext(Navbar));