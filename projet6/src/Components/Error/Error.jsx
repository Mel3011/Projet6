import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='content'>
            <p className='errortype'> 404 </p>
            <p className='message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="LinkHome">
				Retourner sur la page d’accueil
			</Link>
        </div>
    );
};

export default Error;