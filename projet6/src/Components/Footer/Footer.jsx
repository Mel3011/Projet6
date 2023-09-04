import React from 'react';
import logo from '../../Assets/Logoblanc.png';

const Footer = () => {
    return (
        <footer>
            <div className="logofooter">
            <img src={logo} alt="Logo de mon application" />
            </div>
            <div className="credentials">
            © 2020 Kasa. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;