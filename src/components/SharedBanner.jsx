
const SharedBanner = ({ title, subTitle="" }) => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 mx-3">{title}</h1>
                <p className="text-lg mx-3">
                    {subTitle}
                </p>
            </div>
        </section>
    );
};

export default SharedBanner;