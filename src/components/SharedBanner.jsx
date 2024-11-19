
const SharedBanner = ({ title, subTitle="" }) => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-lg">
                    {subTitle}
                </p>
            </div>
        </section>
    );
};

export default SharedBanner;