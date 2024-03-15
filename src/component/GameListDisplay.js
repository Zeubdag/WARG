import React, { useState, useEffect } from 'react';
import GameDisplay from '../component/GameDisplay';

const GamesListDisplay = ({games}) => {
  const [maxHeight, setMaxHeight] = useState('400px');

  useEffect(() => {
    const calculateMaxHeight = () => {
      const windowHeight = window.innerHeight;
      const maxAllowedHeight = Math.floor(windowHeight * 1); // Set max height to 80% of window height
      setMaxHeight(`${maxAllowedHeight}px`);
    };

    calculateMaxHeight();

    window.addEventListener('resize', calculateMaxHeight);

    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);
  return (
    <div style={{  maxHeight: maxHeight, overflowY: 'auto', width: '100%', margin: '0 auto' }}>
      {games.map((game) => (
        <GameDisplay key={game.name} game={game} />
      ))}
    </div>
  );
};

export default GamesListDisplay;