import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SuccessSection = () => {
    const data = [
        { title: 'Users', count: 2500 },
        { title: 'Lessons', count: 120 },
        { title: 'Vocabulary', count: 8000 },
        { title: 'Tutorials', count: 50 },
    ];

    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className='pb-10'>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"><span className='text-primary/80'>Our</span> Success</h2>
                    <p className="text-lg text-gray-600">
                        Empowering thousands of learners to achieve their language goals.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-primary/90 shadow-lg p-6 rounded-lg text-center"
                        >
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        {isVisible ? (
                                            <CountUp end={item.count} duration={3} />
                                        ) : (
                                            0
                                        )}
                                    </h3>
                                )}
                            </VisibilitySensor>
                            <p className="text-sm font-medium text-white">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessSection;
