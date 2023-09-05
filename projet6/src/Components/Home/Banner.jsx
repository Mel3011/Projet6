import React from 'react';
import banner from '../../Assets/Banner.jpg';


function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div className='home-banner'>
            <img src={banner} alt='Bannière Kasa' className='home-image' />
            <h1 className='home-title'>{title}</h1>
        </div>
    )
}

export default Banner