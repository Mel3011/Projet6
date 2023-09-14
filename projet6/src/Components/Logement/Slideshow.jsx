import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import annonces from '../../annonces.json';

const Slideshow = ({ logementId }) => {
  // Filtrer les annonces pour obtenir celles associées à l'ID du logement
  const logementAnnonces = annonces.filter(annonces => annonces.id === logementId);

  // Extraire les URL des images pour le logement spécifique
  const imageUrls = logementAnnonces.map(annonces => annonces.pictures);

  return (
    <div className="slide-container">
      <Slide images={imageUrls}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
