import React from 'react';
import AccountForm from '../component/AccountForm';
import SteamForm from '../component/SteamForm';
import GogForm from '../component/GogForm';
import MenuBar from '../component/MenuBar';
import styled from "styled-components";

const SettingsPage = () => {

  const Button = styled.button`
    background-color: #3f51b5;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    border: 0; 
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #283593;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }`
    
  return (
    <div className="options-page">
      <MenuBar />
      <h1> Paramètres Comptes </h1>
      <div className="main-content">
        <div className="left-panel">
          <h2>Comptes associés</h2>
          <h4>Compte steam</h4>
          <SteamForm />

          <h4>Compte GoG</h4>
          <GogForm />
          
        </div>

        <div className="right-panel">
          <h2>Modifier les informations de votre compte</h2>
          <AccountForm />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
