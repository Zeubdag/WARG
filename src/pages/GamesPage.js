import React, { useState, useEffect } from 'react';
import GameListDisplay from '../component/GameListDisplay';
import GameCarousel from '../component/GameCarousel';

const GamesPage = () => {
  const [gamesLarge, setLargeGames] = useState([]);
  const [gamesSmall, setSmallGames] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('token')
    //const accessToken = 'KjxwY6VeTUo1UYB13TDE0mFiwOHlgQFVoMvVpBBXHyS422hBKSCE9yXaI7V2Kln25Qf3QZBDGcAFu5MsdshrxPcFSCwMAZ3IM63oXK98O5B5EkJ7b9e6lbVPdTpx6KbFohwO5kV0NEl-x_WsxcKC9HGYbfqAn5pDZbC_pYm9yI8S4y3jse2JDyq6ZORxiHzi';
    const fetchComputerData = async () => {
      try {
        const url = 'http://52.47.150.41:8080/api/v1/games/steam/computer'
        const response = await fetch(url, {
            headers: {
              Authentication: `${accessToken}`
            }
            });
        const data = await response.json();
        setLargeGames(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchComputerData();

    const fetchMobileData = async () => {
        try {
          const url = 'http://52.47.150.41:8080/api/v1/games/steam/mobile?steamId=76561198092821179'
          const response = await fetch(url, {
            headers: {
              Authentication: `${accessToken}`
            }
            });
          const data = await response.json();
          setSmallGames(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchMobileData();


    const fetchAccountSettings = async () => {
      try {
        const url = 'http://52.47.150.41:8080/api/v1/account/settings'
        const response = await fetch(url, {
          method : 'GET',
          headers: {
            Authentication: `${accessToken}`
          }
        });
        console.log('response fetch account settings : ', response)
        response.then(response => {
          console.log('response fetch account settings .then : ', response)
          response.json().then( data => {
            console.log('response fetch account settings data : ', data)
            localStorage.setItem('settings', data)
            console.log("GET ACCOUNT SETTINGS : ",localStorage.getItem('settings'))
          });
        });
      } catch (error) {
        console.error('error fetching settings')
      }
    }

    fetchAccountSettings();

  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ marginRight: '20px' }}>
        <GameListDisplay games={gamesSmall} style={{ width: '40%', marginRight: '20px' }}/>
      </div>
      <div>
        <GameCarousel games={gamesLarge} style={{ width: '60%' }}
        />
      </div>
    </div>
  );
};

export default GamesPage;