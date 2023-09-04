import React from 'react';

import Banner from '../Components/Home/Banner';
import Card from '../Components/Home/Card';



const Home = () => {
    return (
        <><div className='banière'>
            <Banner />
        </div><div className='Cards'>
                <Card />
            </div></>
    );
};

export default Home;