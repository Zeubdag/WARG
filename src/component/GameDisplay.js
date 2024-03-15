import React from 'react';

const GameDisplay = ({ game }) => {
  return (
    <tr>
      <td>
        <img src={game.imageUrl} alt={game.name} style={{ maxWidth: '300px' }} />
      </td>
      <td>
      {game.name}
      </td>
    </tr>
  );
};

export default GameDisplay;