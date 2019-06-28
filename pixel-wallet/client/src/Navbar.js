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
                        <div className="nav-link">
                            <Link to="/signup">Sign Up</Link>
                        </div>

                        <div className="nav-link">
                            <Link to="/login">Log In</Link>
                        </div>

                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className="nav-link">
                            <Link to="/finance">Edit Finances</Link>
                        </div>

                        <div className="nav-link">
                            <Link to="/profile">Profile</Link>
                        </div>

                        <div className="nav-link">
                            <button onClick={logoutButton}>
                                Logout</button>
                        </div>
                    </React.Fragment>
            }
        </nav>
    )
}

export default withRouter(withContext(Navbar));