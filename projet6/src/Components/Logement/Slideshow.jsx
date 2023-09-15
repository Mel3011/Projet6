import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <button onClick={previousSlide}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
