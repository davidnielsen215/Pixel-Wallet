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
                        <div className="btn-lg btn-dark">
                            <Link to="/signup">Sign Up</Link>
                        </div>

                        <div className="btn-lg btn-dark">
                            <Link to="/login">Log In</Link>
                        </div>

                    </React.Fragment>
                :
                    <React.Fragment>
                        
                        <div className="btn-lg btn-dark">
                            <Link to="/finance">Edit Finances</Link>
                        </div>

                        <div className="btn-lg btn-dark">
                            <Link to="/profile">Profile</Link>
                        </div>
                       
                        

                        <div>
                            <button onClick={logoutButton} className="btn-lg btn-dark btn-block">
                                Logout</button>
                        </div>
                    </React.Fragment>
            }
        </nav>
    )
}

export default withRouter(withContext(Navbar));