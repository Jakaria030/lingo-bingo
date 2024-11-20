import React, { useEffect, useState } from 'react';
import SharedBanner from '../components/SharedBanner';
import { Link } from 'react-router-dom';

const Tutorials = () => {
    const title = "Tutorials";
    const subTitle = "Explore curated lessons and video tutorials to enhance your learning journey";

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("/tutorials.json")
        .then(res => res.json())
        .then(data => setVideos(data));
    }, []);

    return (
        <div>
            {/* Banner section */}
            <section>
                <SharedBanner
                    title={title}
                    subTitle={subTitle}
                ></SharedBanner>
            </section>

            {/* Tutorial section */}
            <section className='w-11/12 sm:w-10/12 mx-auto'>
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 my-10'>

                    {
                        videos.map((video, indx) => <div key={indx} className="sm:h-60">
                            <div className="w-full h-full">
                                <iframe
                                    src={video.src}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="w-full h-full rounded-lg"
                                ></iframe>
                            </div>
                        </div>)
                    }

                </section>

            </section>

            <section className='w-11/12 sm:w-10/12 mx-auto flex items-center justify-center my-5'>   
                <Link to="/start-learning" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300">Learn Vocabularies</Link>
            </section>

        </div>
    );
};

export default Tutorials;