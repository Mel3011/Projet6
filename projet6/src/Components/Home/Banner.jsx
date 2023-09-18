import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
    const { title, alt, link, imageUrl } = props;

    return (
        <div className='home-banner'>
            <a href={link}>
                <img src={imageUrl} alt={alt} className='home-image' />
            </a>
            <h1 className='home-title'>{title}</h1>
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string.isRequired,
    link: PropTypes.string,
    imageUrl: PropTypes.string.isRequired, // Nouvelle prop pour l'URL de l'image
};

export default Banner;
