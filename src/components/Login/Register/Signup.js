import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth'

import "./Signup.css"

const Signup = () => {
    const { handleGoogleSignIn, registerByEmailPass, error } = useAuth()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    const handleRegister = () => {
        registerByEmailPass(email, password, name)

    }

    const goToLogIn = () => {
        history.push('/logIn')
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    const text = "auth/email-already-in-use"
    return (

        <div className="mt-5">

            <div>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        <input type="text" name="name" placeholder="Your Name" onChange={handleName} />
                        <input type="text" name="email" placeholder="E-mail" onChange={handleEmail} />
                        <input type="password" name="password" placeholder="Password" onChange={handlePass} />

                        {
                            error === text ? <span className="text-danger hidden">Give a new email</span> : <span className="text-white hidden" > Give a new email</span>
                        }
                        <input type="submit" name="signup_submit" value="Sign me up" onClick={handleRegister} />

                    </div>

                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>
                        <button className="social-signin facebook" onClick={goToLogIn} >Log in with Email</button>
                        <button className="social-signin google" onClick={googleSignIn}>Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;