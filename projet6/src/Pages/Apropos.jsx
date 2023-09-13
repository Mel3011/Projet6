import React from 'react';
import Collapse from '../Components/Collapse/Collapse';
import Banner from '../Components/Home/Banner';
import aboutbanner from '../Assets/aboutbanner.png';

function Apropos () {
    return (
        <main><div className='baniere'>
            <Banner 
                alt="Bannière Kasa"
                imageUrl={aboutbanner}
            />
        </div>
        <div className='aboutpage'>
                <Collapse buttonLabel="Fiabilité" content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} />
                <Collapse buttonLabel="Respect" content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
                <Collapse buttonLabel="Service" content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
                <Collapse buttonLabel="Sécurité" content={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers pour la sécurité domestique pour nos hôtes.</p>} />
        </div></main>
    );
};

export default Apropos;