import React from 'react';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';

const Home = () => {
    return (
        <div className='w-11/12 sm:w-10/12 mx-auto'>
            <Banner></Banner>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;