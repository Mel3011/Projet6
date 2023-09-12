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
                <Collapse buttonLabel="Fiabilité" content={<p>Contenu de la section 1.</p>} />
                <Collapse buttonLabel="Respect" content={<p>Contenu de la section 2.</p>} />
                <Collapse buttonLabel="Service" content={<p>Contenu de la section 3.</p>} />
                <Collapse buttonLabel="Sécurité" content={<p>Contenu de la section 4.</p>} />
        </div></main>
    );
};

export default Apropos;