import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Item from './Item';

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
};

export const Carousel = ({ images, links, names}) => {
  const items = images.map((image, index) => (
    <Item name={names[index]} imageUrl={image} />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
}

export default Carousel;