import about from "../assets/about.png";
import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-center mx-5 text-2xl sm:text-3xl font-extrabold">About <span className="text-primary/80">Lingo Bingo</span></h1>
                <p className="max-w-3xl text-center mx-5">At Lingo Bingo, our mission is to make learning German vocabulary engaging, accessible, and enjoyable for everyone.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
                <div>
                    <img className="w-full max-w-xl" src={about} alt="About Image" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-extrabold to-txtColor">How Users Can Learn:</h3>
                    <p className="text-txtColor font-medium">Lingo Bingo offers an interactive approach to vocabulary learning through:</p>
                    <ul className="space-y-1">
                        <li className="flex items-center gap-1"><FaCheck className="text-primary shrink-0"></FaCheck> Flashcards: Practice new words with visual aids and translations.</li>
                        <li className="flex items-center gap-1"><FaCheck className="text-primary shrink-0"></FaCheck> Word Games: Engage in fun activities to memorize vocabulary faster.</li>
                        <li className="flex items-center gap-1"><FaCheck className="text-primary shrink-0"></FaCheck> Progress Tracking: Monitor your improvement and revisit challenging words.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;