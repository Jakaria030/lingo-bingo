import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import SuccessSection from '../components/SuccessSection';
import CTASection from '../components/CTASection';
import Testimonial from '../components/Testimonial';
import Title from '../components/Title';

const Home = () => {

    return (
        <div>
            <Title title="Home"></Title>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <SuccessSection></SuccessSection>
            <Testimonial></Testimonial>
            <CTASection></CTASection>
        </div>
    );
};

export default Home;