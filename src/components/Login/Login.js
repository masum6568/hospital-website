import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle, logOut, user } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || 'home';




    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // console.log(result)
                history.push(redirect_uri)
            })

    }

    return (
        <div className="login-form">
            <div>

                <p><b> Already have an Account? Go Here....
                    Ans no? </b>  </p>
                <FontAwesomeIcon className="icon" icon={faArrowDown} size='2x' />
                <br />
                <Link to="/register">  <button className="btn-primary">Create Account</button></Link>

                <br />
                <br />
                <p><b> Or </b></p>

                <p><b>   Ans yes?
                    Click Here.... </b>  </p>
                <FontAwesomeIcon className="icon" icon={faArrowDown} size='2x' />
                <br />
                {user.email ?
                    <button onClick={logOut} className="btn-primary">Log Out</button>
                    :
                    <button
                        onClick={handleGoogleLogin}
                        className="btn-primary">Google Sign In</button>}
            </div>
        </div>


    );
};


export default Login;


