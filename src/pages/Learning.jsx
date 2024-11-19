import SharedBanner from '../components/SharedBanner';
import { Link } from 'react-router-dom';

const Learning = () => {
    const title = "Let’s Learn";
    const subTitle = "Expand your knowledge and skills with our comprehensive learning resources.";

    const lessonNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            {/*Banner section */}
            <section>
                <SharedBanner
                    title={title}
                    subTitle={subTitle}
                ></SharedBanner>
            </section>

            <section className='w-11/12 sm:w-10/12 mx-auto'>
                {/* Card section */}
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-12'>
                    {
                        lessonNo.map((lesson, indx) => <Link to={`/lesson${lesson}`} key={indx} className='p-5 bg-base-200 min-h-32 flex items-center justify-center shadow-md hover:scale-105 transition duration-100'>
                            <h1 className='text-xl font-semibold'>Lesson No - {lesson}</h1>
                        </Link>
                        )
                    }
                </section>

                {/* Embaded video section */}
                <section className="py-12">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className='mb-8'>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Learn <span className='text-primary/80'>the Alphabet</span></h2>
                            <p className="text-lg text-gray-600">
                                Watch this tutorial to start learning the alphabet of this language.
                            </p>
                        </div>

                        <div className="max-w-xl sm:h-72 mx-auto mb-8">
                            <iframe
                                src="https://www.youtube.com/embed/TytGj8xiPyY?si=ICjzIp9b5Vil4e_g"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>

                        <Link to="/tutorials" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300">View More</Link>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default Learning;