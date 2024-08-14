import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Home/context/UserContext';
import AdminLogin from './AdminLogin'; // Import the AdminLogin component

export default function Login({ onClose, onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser(); // Access setUser from context
    const navigate = useNavigate(); // For programmatic navigation
    const [isAdminLogin, setIsAdminLogin] = useState(false); // State to switch to AdminLogin

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name: email }); // You can replace this with actual login logic
        navigate('/home'); // Redirect to home
        onClose(); // Close the login modal
    };

    // Function to switch to AdminLogin
    const handleAdminLogin = () => {
        setIsAdminLogin(true);
    };

    if (isAdminLogin) {
        return <AdminLogin onClose={onClose} onRegister={onRegister} />;
    }

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="text">Welcome Back</div>
                <form onSubmit={handleSubmit}>
                    <div className="data">
                        <label>UserName</label>
                        <input 
                          type="text" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                        />
                    </div>
                    <div className="data">
                        <label>Password</label>
                        <input 
                          type="password" 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          required 
                        />
                    </div>
                    <div className="forgot-pass">
                        <a href="mailto:abisheaksakthivelmurugan@example.com">Forgot Password?</a>
                    </div>
                    <div className="btn">
                        <button type="submit">Login</button>
                    </div>
                    <div className="signup-link">
                        Not a member? <a href="#" onClick={onRegister}>New Account</a> or <a href="#" onClick={handleAdminLogin}>Admin</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
