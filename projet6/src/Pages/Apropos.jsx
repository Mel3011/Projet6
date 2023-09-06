import React from 'react';
import Collapse from '../Components/Collapse/Collapse';

function Apropos () {
    return (
        <div>
            <Collapse buttonLabel="Section 1" content={<p>Contenu de la section 1.</p>}/>
        </div>
    );
};

export default Apropos;