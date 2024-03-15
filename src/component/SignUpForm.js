import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSignup = (e) => {
    e.preventDefault();

    const newErrorMessages = [];

    if (!username) {
      newErrorMessages.push('Entrez un nom d\'utilisateur.');
    }
    else if (username.length >= 22) {
      newErrorMessages.push('Le nom d\'utilisateur doit avoir moins de 22 caractères.');
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{8,24}$/)) {
      newErrorMessages.push('Le mot de passe doit contenir au moins une majuscule, une minuscule et être entre 8 et 24 caractères.');
    }

    if (!confirmPassword.match(password) ) {
      newErrorMessages.push('Les mots de passe ne correspondent pas.');
    }

    if (!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) ) {
      newErrorMessages.push('Veuillez rentrer une adresse mail valide.');
    }

    if (newErrorMessages.length === 0) {

      const response = fetch('http://52.47.150.41:8080/api/v1/account', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          mail: email,
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
    <form action={handleSignup} class="form-sign-in">
      <div className="grid-container">
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
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Link to="/login">Se connecter</Link>
        <div class="grid-item-right"><button type="button" onClick={handleSignup}>Créer un compte</button></div>
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

  );
};

export default SignupForm;
