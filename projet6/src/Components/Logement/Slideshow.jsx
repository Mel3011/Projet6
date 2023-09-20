import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <div className="arrows">
        {images.length > 1 && (
          <div
            className="arrow-left"
            onClick={previousSlide} // Clic sur la flèche de gauche pour passer à l'image précédente
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        )}

        {images.length > 1 && (
          <div
            className="arrow-right"
            onClick={nextSlide} // Clic sur la flèche de droite pour passer à l'image suivante
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
      </div>
      {images.length > 1 && (
        <p className="counter">
        {currentImageIndex + 1} / {images.length}
      </p>
      )}
      
    </div>
  );
};

export default Slideshow;
