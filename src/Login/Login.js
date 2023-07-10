import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Perform validation or authentication logic here
        // For simplicity, let's assume the login is successful if email and password are not empty
        if (email && password) {
            navigate('/report'); // Navigate to another page after successful login
        }
    };
    return (
        <div className="login ">
            <div className='loginHead'>
                <h2>Please Login </h2>
                <form>
                    <div>
                        <label htmlFor="username">ID</label>
                        <input type="text" className='email' placeholder='Enter your ID' name="name" value={email} onChange={handleEmailChange} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" className='password' name="password" value={password} onChange={handlePasswordChange} placeholder='Enter your email Password' required />
                    </div>

                    <div>
                        <button className='button' onClick={handleLogin}>Login</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;