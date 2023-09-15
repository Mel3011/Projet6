import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../Components/Logement/Slideshow';
import Collapse from '../Components/Collapse/Collapse';
import data from '../annonces.json'; 

const Logement = () => {
  const { id } = useParams(); // Récupérez l'ID de l'annonce à partir de l'URL
  console.log("ID extrait des paramètres d'URL :", id);

  // Recherchez l'annonce correspondant à l'ID dans les données JSON
  const annonce = data.find((item) => {
    console.log("ID de l'élément en cours de vérification :", item.id);
    return item.id === id;
  });
  
  console.log("Annonce trouvée :", annonce);

  if (!annonce) {
 return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <Slideshow images={annonce.pictures} />
      <h1>{annonce.title}</h1>
      <p>{annonce.location}</p>
      <div className='tags-and-rating'>
        <p>{annonce.tags}</p>
        <div className='rating'>

        </div>
      </div>
      <div className='logement-collapse'>
      <Collapse buttonLabel="Description" content={annonce.description} />
      <Collapse buttonLabel="Equipements" content={annonce.equipments} />
      </div>
    </div>
  );
};

export default Logement;
