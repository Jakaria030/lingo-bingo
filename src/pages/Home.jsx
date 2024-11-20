import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import SuccessSection from '../components/SuccessSection';
import CTASection from '../components/CTASection';
import Testimonial from '../components/Testimonial';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <SuccessSection></SuccessSection>
            <Testimonial></Testimonial>
            <CTASection></CTASection>
        </div>
    );
};

export default Home;