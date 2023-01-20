import React from 'react';
import Services from '../Services';
import Banner from './Banner';
import Cards from './Cards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
        </div>
      
    );
};

export default Home;