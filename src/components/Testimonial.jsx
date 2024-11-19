import userImg from "../assets/user.jpeg";
const Testimonial = () => {

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto text-center">
                <div className="pb-5">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        <span>What</span> <span className="text-primary/80">Users Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Hear what our users say about their journey with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="card bg-base-100 border border-primary/80 ">
                        <figure className="size-32 mx-auto mt-5">
                            <img
                                src={userImg}
                                className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Emily Frost</h2>
                            <p>This platform made learning a new language a magical experience. Highly recommend it!</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 border border-primary/80">
                        <figure className="size-32 mx-auto mt-5">
                            <img
                                src={userImg}
                                className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Jack Snow</h2>
                            <p>The tutorials and lessons are so engaging! I learned faster than I expected.</p>

                        </div>
                    </div>
                    <div className="card bg-base-100 border border-primary/80">
                        <figure className="size-32 mx-auto mt-5">
                            <img
                                src={userImg}
                                className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Sophia Icelyn</h2>
                            <p>The vocabulary tools were exactly what I needed. Love the winter-themed design too!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
