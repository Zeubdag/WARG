import React from 'react';
import SignUpForm from '../component/SignUpForm';
import Logo from '../component/Logo';
import '../App.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <Logo />
            <h2>Créer un compte</h2>
            <SignUpForm />
        </div>
    );
}

export default LoginPage;