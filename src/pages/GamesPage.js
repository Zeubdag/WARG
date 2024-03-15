import React, { useState, useEffect } from 'react';
import GameListDisplay from '../component/GameListDisplay';
import GameCarousel from '../component/GameCarousel';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../component/MenuBar';

const GamesPage = () => {
  const [gamesLarge, setLargeGames] = useState([]);
  const [gamesSmall, setSmallGames] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('token')
  const steamId = localStorage.getItem('steamId')
  console.log('STEAM ID : ', steamId)

  useEffect(() => {

    //const accessToken = 'KjxwY6VeTUo1UYB13TDE0mFiwOHlgQFVoMvVpBBXHyS422hBKSCE9yXaI7V2Kln25Qf3QZBDGcAFu5MsdshrxPcFSCwMAZ3IM63oXK98O5B5EkJ7b9e6lbVPdTpx6KbFohwO5kV0NEl-x_WsxcKC9HGYbfqAn5pDZbC_pYm9yI8S4y3jse2JDyq6ZORxiHzi';
    const fetchComputerData = async () => {
      try {
        const url = 'http://52.47.150.41:8080/api/v1/games/steam/computer?steamId=' + steamId
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
          const url = 'http://52.47.150.41:8080/api/v1/games/steam/mobile'
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

  }, []);

  return (
    <div className="options-page">
      <MenuBar />
    <body>
    <div className="main-content">
      <div className="center-panel">
        <GameListDisplay games={gamesSmall} style={{ width: '40%', marginRight: '20px' }}/>
      </div>
      <div>
        <GameCarousel games={gamesLarge} style={{ width: '60%' }}
        />
      </div>
    </div>
    </body>
    </div>
  );
};

export default GamesPage;