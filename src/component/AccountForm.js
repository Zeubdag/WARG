import React, { useState } from 'react';
import styled from "styled-components";

const AccountForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

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

  const handleSignup = (e) => {
    e.preventDefault();

    const newErrorMessages = [];

    if (username.length >= 22) {
      newErrorMessages.push('Le nom d\'utilisateur doit avoir moins de 22 caractères.');
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{8,24}$/)) {
      newErrorMessages.push('Le mot de passe doit contenir au moins une majuscule, une minuscule et être entre 8 et 24 caractères.');
    }

    if (!confirmPassword.match(password) ) {
      newErrorMessages.push('Les mots de passe ne correspondent pas.');
    }

    if (newErrorMessages.length === 0) {

      const response = fetch('http://52.47.150.41:8080/api/v1/account', {
        method: 'PUT',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json'
        },

      });

      response.then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log("Compte créé")
        } else {
          // Connexion réussie, effectue les actions nécessaires
          newErrorMessages.push("Erreur de connexion");
        }
      }).catch(error => {
        newErrorMessages.push('Erreur lors de la requête:' + error);
      })
      setErrorMessages(newErrorMessages);
    };

    setErrorMessages(newErrorMessages);
  };
  
  return (
    <div>
      <form action={handleSignup}>
      <div>
        <div class="item-form">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="item-form">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="item-form">
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div><Button onClick={handleSignup}>Modifier son compte</Button></div>
        {errorMessages.length > 0 && (
          <div className="error-messages-container">
            {errorMessages.map((message, index) => (
              <div key={index} className="error-message">
                {message}
              </div>
            ))}
          </div>
        )}
      </div>

    </form>
      
    </div>
  );
};

export default AccountForm;
