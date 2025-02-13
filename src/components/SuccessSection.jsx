import { useContext, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { AuthContext } from '../provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SuccessSection = () => {
    useEffect(() => {
        AOS.init();
    },[]);

    const {words} = useContext(AuthContext);
    const lessons = [];

    // Unique lesson count
    for(const word of words){
        if(!lessons.includes(word.lesson_no)){
            lessons.push(word.lesson_no);
        }    
    }

    // For count tutorial
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch("/tutorials.json")
        .then(res => res.json())
        .then(data => setVideos(data));
    }, []);

    const data = [
        { title: 'Users', count: 500 },
        { title: 'Lessons', count: lessons.length },
        { title: 'Vocabulary', count: words.length },
        { title: 'Tutorials', count: videos.length },
    ];

    return (
        <div className="py-12">
            <div className="w-11/12 sm:w-10/12 mx-auto text-center">
                <div data-aos="zoom-in" className="pb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        Our <span className="text-primary/80">Success</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Empowering thousands of learners to achieve their language goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, index) => {
                        const { ref, inView } = useInView({ threshold: 0.1 });
                        return (
                            <div
                                key={index}
                                className="bg-primary/90 shadow-lg p-6 rounded-lg text-center"
                                ref={ref}
                            >
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {inView ? (
                                        <CountUp end={item.count} duration={3} />
                                    ) : (
                                        0
                                    )}
                                </h3>
                                <p className="text-sm font-medium text-white">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;
