import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GameCarousel = ({ games }) => {
    const settings = {
        showStatus: false,
        showIndicators: false,
        showThumbs: false,
        infiniteLoop: true,
        autoPlay: false,
        interval: 3000,
        stopOnHover: true,
        centerMode: true,
        centerSlidePercentage: 30,
        dynamicHeight: true,
        emulateTouch: true,
        swipeable: true,
      };
  return (
    <Carousel {...settings}>
      {games.map((game) => (
        <div key={game.name}>
          <img src={game.imageUrl} alt={game.name} style={{ maxWidth: '500px'}}/>
        </div>
      ))}
    </Carousel>
  );
};

export default GameCarousel;