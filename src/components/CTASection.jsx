import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CTASection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto my-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Join the Winter Adventure</h2>
        <p className="text-lg mb-8">
          Ready to take your language skills to the next level? Start your
          journey today!
        </p>
        <Link to="/start-learning" data-aos="zoom-in" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition-all duration-300">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
