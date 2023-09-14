import React from 'react';
import annonces from '../../annonces.json';
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className='block-card'>
      {annonces.map((logement, index) => (
        <Link to={"/logement/" + logement.id}>
        <div key={index} className="location-card">
          <img src={logement.cover} alt={logement.title} />
          <h2 className='location-title'>{logement.title}</h2>
        </div></Link>
      ))}
    </div>
  );
}

export default Card;
