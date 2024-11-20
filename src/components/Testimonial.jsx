import user1 from "../assets/user.jpeg";
import user2 from "../assets/user-2.jfif";
import user3 from "../assets/user-3.jpg";
import user4 from "../assets/user-4.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Testimonial = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const userComment = [
        {id: 1, name: "Emily Frost", comment: "This platform made learning a new language a magical experience. Highly recommend it!", image: user1},
        {id: 2, name: "Sophia Icelyn", comment: "The vocabulary tools were exactly what I needed. Love the winter-themed design too!", image: user2},
        {id: 3, name: "Jack Snow", comment: "The tutorials and lessons are so engaging! I learned faster than I expected.", image: user3},
        {id: 4, name: "John Lamiye", comment: "The vocabulary tools were exactly what I needed. Love the winter-themed design too!", image: user4},
    ];

    return (
        <div className="w-11/12 sm:w-10/12 mx-auto py-10">
            <div className="text-center">
                <div data-aos="zoom-in" className="pb-5">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        <span>What</span> <span className="text-primary/80">Users Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Hear what our users say about their journey with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        userComment.map(user => <div data-aos="flip-right" key={user.id} className="card bg-base-100 border border-primary/80 ">
                            <figure className="size-32 mx-auto mt-5">
                                <img
                                    src={user.image}
                                    className="rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.comment}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
