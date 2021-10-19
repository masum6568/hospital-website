import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle, logOut, user } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';




    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <form >
                    {/* <input type="email" placeholder="Your Email" />

                    <br />
                    <input type="password" placeholder="inter you password" />
                    <br />
                    <input type="submit" value="Submit" /> */}
                </form>
                <p>Already have an Account?<Link to="/register">Create Account</Link></p>
                {user.email ?
                    <button onClick={logOut} className="btn-regular">Log Out</button>
                    :
                    <button
                        onClick={handleGoogleLogin}
                        className="btn-regular">Google Sign In</button>}
            </div>
        </div>


    );
};


export default Login;


