import React from 'react';
import Slideshow from '../Components/Logement/Slideshow';

const Logement = ({ match }) => {
  const logementId = match.params.logementId;
  return (
    <div>
       <Slideshow logementId={logementId} />
    </div>
  );
};

export default Logement;