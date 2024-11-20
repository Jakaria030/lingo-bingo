import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import SharedBanner from "./SharedBanner";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Lessons = () => {
    const { words: allWord } = useContext(AuthContext);
    const { lesson_no } = useParams();

    const words = allWord.filter(word => word.lesson_no === parseInt(lesson_no));

    const title = "Lesson No - " + lesson_no;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    // Show Modal
    const handleModal = (data) => {
        setModalData(data);
        setIsModalOpen(true); 
    };

    // Close Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null); 
    };

    // Prounounce Word
    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'de-DE';
        window.speechSynthesis.speak(utterance);
    }

    return (
        <div>
            {/* Banner section */}
            <section>
                <SharedBanner title={title} />
            </section>

            {/* Word show in card */}
            
            <div className="w-11/12 sm:w-10/12 mx-auto my-5">
            <Link to="/start-learning" className="px-6 py-2 border border-gray-700 rounded-lg text-gray-700 font-semibold flex items-center max-w-52 gap-2 "><FaAngleDoubleLeft></FaAngleDoubleLeft> <span>Back To Lesson</span></Link>
            </div>

            <section className="w-11/12 sm:w-10/12 mx-auto my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {words.map(word => (
                        <div key={word.id} className="card bg-base-100 shadow-lg">
                            <div
                                className={`
                                    ${
                                        word.difficulty === "Easy"
                                            ? "bg-[#c0e4b5]"
                                            : word.difficulty === "Medium"
                                            ? "bg-[#ece7a9]"
                                            : "bg-[#f0a2a2]"
                                    }
                                    py-10 rounded-t-lg cursor-pointer hover:opacity-80
                                `}
                                title="Click To Hair Sound"
                            >
                                <h2 onClick={() => pronounceWord(word.word)} className="text-3xl font-bold text-center text-gray-700">{word.word}</h2>
                            </div>
                            <div
                                className={`
                                    ${
                                        word.difficulty === "Easy"
                                            ? "bg-[#DFFFD6]"
                                            : word.difficulty === "Medium"
                                            ? "bg-[#FFF9C4]"
                                            : "bg-[#FFD6D6]"
                                    }
                                    p-3
                                `}
                            >
                                <h3><strong>Meaning:</strong> {word.meaning}</h3>
                                <h3><strong>Pronunciation:</strong> {word.pronunciation}</h3>
                                <h3><strong>Part of speech:</strong> {word.part_of_speech}</h3>
                                <h3><strong>Difficulty:</strong> {word.difficulty}</h3>

                                <div className="flex justify-center items-center gap-2 flex-wrap mt-5">
                                    <button
                                        onClick={() =>
                                            handleModal({
                                                word: word.word,
                                                meaning: word.meaning,
                                                difficulty: word.difficulty,
                                                when_to_say: word.when_to_say,
                                                example: word.example
                                            })
                                        }
                                        className="px-6 py-2 border border-gray-700 rounded-lg text-gray-700 font-semibold"
                                    >
                                        When To Say
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="w-11/12 sm:w-10/12 mx-auto my-5">
            <Link to="/start-learning" className="px-6 py-2 border border-gray-700 rounded-lg text-gray-700 font-semibold flex items-center max-w-52 gap-2 "><FaAngleDoubleLeft></FaAngleDoubleLeft> <span>Back To Lesson</span></Link>
            </div>

            {/* Modal section */}
            {isModalOpen && modalData && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 sm:w-96">
                        <div className={`h-32 flex items-center justify-center text-gray-700 rounded-t-lg mb-5 
                                ${
                                    modalData.difficulty === "Easy"
                                        ? "bg-[#DFFFD6]"
                                        : modalData.difficulty === "Medium"
                                        ? "bg-[#FFF9C4]"
                                        : "bg-[#FFD6D6]"
                                }
                            `}>
                            <h2 className="text-2xl font-bold mb-4">{modalData.word}</h2>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg"><strong>Meaning:</strong> {modalData.meaning}</h3>
                            <h3 className="text-lg"><strong>When to say:</strong> {modalData.when_to_say}</h3>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Examples:</h3>
                            <ul className="ml-2">
                                {modalData.example && modalData.example.length > 0 ? (
                                    modalData.example.map((ex, idx) => (
                                        <li key={idx}>
                                            <p><strong>German:</strong> {ex.german}</p>
                                            <p><strong>Pronunciation:</strong> {ex.pronunciation}</p>
                                            <p><strong>Meaning:</strong> {ex.meaning}</p>
                                        </li>
                                    ))
                                ) : (
                                    <li>No examples available.</li>
                                )}
                            </ul>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-accent text-white rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lessons;
