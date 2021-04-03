import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <lable>
                    <p>Username</p>
                    <input type="text" />
                </lable>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
