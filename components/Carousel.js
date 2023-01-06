import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Item from './Item.js';

const responsive = {
  0: { items: 1 },
  630: { items: 2 },
  960: { items: 3 },
  1200: { items: 4 },
};

export const Carousel = ({ images, links, names}) => {
  const items = images.map((image, index) => (
    <Item name={names[index]} imageUrl={image} links={links[index]}/>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={2000}
    />
  );
}

export default Carousel;