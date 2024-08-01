import React from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterButton = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <button className="register" onClick={handleRegisterClick}>Register</button>
    );
};

const LoginButton = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <button className="login" onClick={handleLoginClick}>Log In</button>
    );
};

export { RegisterButton, LoginButton };