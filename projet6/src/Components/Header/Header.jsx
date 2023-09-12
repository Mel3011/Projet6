import React from 'react';
import logo from '../../Assets/LOGO.png';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" />
                </Link>
            </div>
            <div className='nav-bar'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                            <Link to="/a-propos">À Propos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
