import React, { useState } from 'react';
import styled from "styled-components";

const GogForm = () => {
    const [gogid, setGogid] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const Button = styled.button`
    background-color: #3f51b5;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    width: 100%;
    display: block;
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

    const handleLink = (e) => {
        e.preventDefault();

        const newErrorMessages = [];

        if (!gogid) {
            newErrorMessages.push('Entrez votre ID gog');
        }

        if (newErrorMessages.length === 0) {
            try {
      
              const response = fetch('http://52.47.150.41:8080/api/v1/account/settings', {
                method: 'PUT',
                body: JSON.stringify({
                    gogUsername: 'Bearer ' + gogid,
                }),
                headers: {
                  'Content-Type': 'application/json',
                  'Authentication': localStorage.getItem('token')
                },
                
              });
            } catch (error) {
              newErrorMessages.push('Erreur lors de la requête:' + error);
            }
          }

        setErrorMessages(newErrorMessages);
    }

    return (
        <form action={handleLink}>
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="GoG ID"
                        value={gogid}
                        onChange={(e) => setGogid(e.target.value)}
                    />
                </div>
                <div><Button onClick={handleLink}>Lier son compte</Button></div>
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
    )
}

export default GogForm;