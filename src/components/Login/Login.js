import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle, logOut, user } = useAuth();
    const location = useLocation();
    console.log('came from', location.state?.from);
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
                        onClick={signInUsingGoogle}
                        className="btn-regular">Google Sign In</button>}
            </div>
        </div>


    );
};


export default Login;


// import React from 'react';
// import { Button } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';

// import './Login.css'

// const Login = () => {
//     const { signInUsingGoogle } = useAuth()

//     return (
//         <div className="Box">


//             <div className="box">
//                 <h1>Login</h1>

//                 <input type="text" name="" placeholder="Username" />

//                 <input type="password" name="" placeholder="Password" />

//                 <Button onClick={signInUsingGoogle}>Login</Button>
//             </div>
//         </div>
//     );
// };

// export default Login;