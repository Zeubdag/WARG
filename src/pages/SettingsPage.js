import React from 'react';
import AccountForm from '../component/AccountForm';
import ExternalLinks from '../component/ExternalLinks';
import MenuBar from '../component/MenuBar';

const SettingsPage = () => {
  return (
    <div className="options-page">
      <MenuBar />
      <h1> Paramètres Comptes </h1>
      <div className="main-content">
        <div className="left-panel">
          <h2>Comptes associés</h2>
          <p>Compte steam</p>
          <ExternalLinks />
          
        </div>

        <div className="right-panel">
          <h2>Informations de votre compte</h2>
          <p>Form change data</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
