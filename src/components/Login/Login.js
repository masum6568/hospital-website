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
                {/* <form >

                </form> */}
                <p><b> Already have an Account? Go Here....
                    Ans no? </b>  </p>
                <br />
                <Link to="/register">  <button className="btn-regular">Create Account</button></Link>

                <br />
                <br />
                <p><b>   Ans yes?
                    Click Here.... </b>  </p>
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


