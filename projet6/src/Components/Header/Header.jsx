import React from 'react';
import logo from '../../Assets/LOGO.png';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <header>
            <div className="logo">
            <img src={logo} alt="Logo de mon application" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                        <Link to="/a-propos">À Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;