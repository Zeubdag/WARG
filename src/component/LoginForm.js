import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
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
      try {
        let token
        const response = fetch('http://52.47.150.41:8080/api/v1/login/login', {
          method: 'POST',
          body: JSON.stringify({
            mail: username,
            password: password,
          }),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        response.then(response => {
          response.json().then(data => {
            // Effectuez ici le traitement avec les données JSON
            token = data.token
            localStorage.setItem('token', token);
            console.log("GET LOCAL STORAGE TOKEN : ", localStorage.getItem('token'))
          }).catch(error => {
            console.error('Erreur lors de la conversion de la réponse en JSON : ', error);
          })
          if (response.status >= 200 && response.status < 300) {
            navigate('/games')
          } else {
            // Gestion des erreurs ici
            newErrorMessages.push('Erreur lors de la requête');
          }
        }).catch(error => {
          // Gestion des erreurs de connexion ici
          newErrorMessages.push('Erreur de connexion');
        });
      } catch (error) {
        newErrorMessages.push('Erreur lors de la requête');
      }
    }
    setErrorMessages(newErrorMessages);
  };

  return (
    <form action={handleLogin} className="form-sign-in">
      <div className="grid-container">
        <div className="item-form"><input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></div>
        <div className="item-form"><input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></div>
        <Link to="/signup">Créer un compte</Link>
        <div className="grid-item-right"><button onClick={handleLogin}>Se connecter</button></div>
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
