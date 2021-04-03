import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            password,
        });
        setToken(token);
    };
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <lable>
                    <p>Username</p>
                    <input type="text" />
                </lable>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <div>
                    <button
                        type="submit"
                        onChange={(e) => setPassword(e.target.value)}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
