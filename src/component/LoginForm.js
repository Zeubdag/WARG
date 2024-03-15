import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrorMessages = [];
    //const CharactersAllowed = /^[A-Za-z_\-@éàâîêôûïüöäëù1-9]+$/;




    if (!username) {
      newErrorMessages.push('Entrez votre nom d\'utilisateur.');
    }
    /*else if (!username.match(CharactersAllowed)) {
      newErrorMessages.push('Arrêtez de vouloir faire des injections SQL s\'il vous plait.');
    }*/

    if (!password) {
      newErrorMessages.push('Entrez votre mot de passe.');
    }
    /*else if (!password.match(CharactersAllowed)) {
      newErrorMessages.push('Arrêtez de vouloir faire des injections SQL s\'il vous plait.');
    }*/
    if (newErrorMessages.length === 0) {

      const response = fetch('http://52.47.150.41:8080/api/v1/login/login', {
        method: 'POST',
        body: JSON.stringify({
          mail: username,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json'
        },

      });

      response.then(response => {
        if (response.status >= 200 && response.status < 300) {
          localStorage.setItem('isAuthentificated', true);
          console.log(localStorage.getItem('isAuthentificated'))
        } else {
          // Connexion réussie, effectue les actions nécessaires
          newErrorMessages.push("Erreur de connexion");
        }
      }).catch(error => {
        newErrorMessages.push('Erreur lors de la requête:' + error);
      })
      setErrorMessages(newErrorMessages);
    };
  };

  return (
    <form action={handleLogin} class="form-sign-in">
      <div className="grid-container">
        <div class="item-form"><input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></div>
        <div class="item-form"><input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></div>
        <Link to="/signup">Créer un compte</Link>
        <div class="grid-item-right"><button onClick={handleLogin}>Se connecter</button></div>
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

export default LoginForm;
