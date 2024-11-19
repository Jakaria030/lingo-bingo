import { useState } from "react";
import slide1 from "../assets/slide-1.png";
import slide2 from "../assets/slide-2.png";
import slide3 from "../assets/slide-3.png";
import slide4 from "../assets/slide-4.png";
import slide5 from "../assets/slide-5.png";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Banner = () => {
    const slide = [slide1, slide2, slide3, slide4, slide5];
    const [slideNumber, setSlideNumber] = useState(0);

    const clickPrevious = () => {
        setSlideNumber(slideNumber === 0 ? 4 : slideNumber - 1);
    };

    const clickNext = () => {
        setSlideNumber(slideNumber === 4 ? 0 : slideNumber + 1);
    };

    return (
        <div className="w-11/12 sm:w-10/12 mx-auto relative my-5">
            <div>
                <img className="w-full h-[200px] sm:h-[300px] md:h-[400] lg:h-[500px]" src={slide[slideNumber]} />
            </div>

            <div className="absolute top-1/2">
                <button onClick={clickPrevious}>
                    <IoIosArrowDropleft className="text-4xl text-gray-500"></IoIosArrowDropleft>
                </button>
            </div>
            <div className="absolute top-1/2 right-0">
                <button onClick={clickNext}>
                    <IoIosArrowDropright className="text-4xl text-gray-500"></IoIosArrowDropright>
                </button>
            </div>
        </div>
    );
};

export default Banner;