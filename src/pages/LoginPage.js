import React from 'react';
import Logo from '../component/Logo';
import LoginForm from '../component/LoginForm';
import '../App.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
