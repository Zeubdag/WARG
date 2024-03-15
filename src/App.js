
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import GamesPage from './pages/GamesPage'
import GogTokenPage from './pages/GogTokenPage'
import { Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element ={<Navigate to ="/login" />}/>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={localStorage.getItem('isAuthentificated') ? <SettingsPage /> : <Navigate to="/login" />} />
          <Route path="/games" element={localStorage.getItem('isAuthentificated') ? <GamesPage/> : <Navigate to="/login" />}/>
          <Route path="/token" element={<GogTokenPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

