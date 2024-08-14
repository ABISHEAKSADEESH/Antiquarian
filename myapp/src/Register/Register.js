import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register({ onClose, onLogin }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="rg-login-modal">
            <div className="rg-login-modal-content">
                <span className="rg-close-btn" onClick={onClose}>&times;</span>
                <div className="rg-text">New Account</div>
                <form action="#">
                    <div className="rg-data">
                        <label>UserName:</label>
                        <input type="text" required />
                    </div>
                    <div className="rg-data">
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div className="rg-data">
                        <label>Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            required 
                        />
                    </div>
                    <div className="rg-data">
                        <label>Re-Type Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            required 
                        />
                    </div>
                    <div className="rg-checker-password">
                        <input 
                            type="checkbox" 
                            id="showPassword"
                            onChange={togglePasswordVisibility}
                        />
                        <label className="show-pass" htmlFor="showPassword"> Show Password</label>
                    </div><br/>
                    <div className="rg-checker">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            <a href="#" className="terms">I agree to the terms and conditions</a>
                        </label>
                    </div>
                    <div className="rg-btn">
                        
                        <button type="rg-submit" onClick={onLogin}>Create Account</button>
                        
                    </div>
                    <div className="rg-signup-link">
                        Already a member? <a href="#" onClick={onLogin}>Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
