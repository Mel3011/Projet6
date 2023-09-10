import React from 'react';

import Banner from '../Components/Home/Banner';
import Card from '../Components/Home/Card';
import homebanner from '../Assets/homebanner.jpg'


const Home = () => {
    return (
        <><div className='banière'>
            <Banner
                title="Chez vous, partout et ailleurs"
                alt="Bannière Kasa"
                link="/page-d-accueil"
                imageUrl={homebanner} 
            />
        </div><div className='Cards'>
                <Card />
            </div></>
    );
};

export default Home;