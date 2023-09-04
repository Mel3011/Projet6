import React from 'react';
import annonces from '../../annonces.json';

function Card() {
  return (
    <div className='block-card'>
      {annonces.map((logement, index) => (
        <div key={index} className="location-card">
          <img src={logement.cover} alt={logement.title} />
          <h2 className='location-title'>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Card;
