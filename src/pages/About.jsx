import SharedBanner from "../components/SharedBanner";
import aboutUs from "../assets/about-us.jpg";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import tailwindIcon from "../assets/tailwind.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import firebaseIcon from "../assets/firebase.png";
import cplusIcon from "../assets/c++.png";
import pythonIcon from "../assets/python.png";
import msaSchool from "../assets/msa.png";
import peddy from "../assets/peddy.png";
import rinterio from "../assets/rinterio.png";

const About = () => {
    const title = "About Us";
    const subTitle = "Learn more about who we are, our expertise, and the projects we’ve built.";

    const skills = [
        {id: 1, technology: htmlIcon, title: "HTML"},
        {id: 2, technology: cssIcon, title: "CSS"},
        {id: 3, technology: tailwindIcon, title: "Tailwind CSS"},
        {id: 4, technology: jsIcon, title: "JavaScript"},
        {id: 5, technology: reactIcon, title: "React"},
        {id: 6, technology: firebaseIcon, title: "Firebase"},
        {id: 7, technology: cplusIcon, title: "C++"},
        {id: 8, technology: pythonIcon, title: "Python"},
    ];

    const projects = [
        {
            title: "MSA School",
            description:
                "MSA School is an educational platform designed to facilitate learning.",
            tech: ["HTML", "Tailwind CSS", "GSAP"],
            image: msaSchool,
            liveDemo: "https://msa-school.netlify.app/",
            repo: "https://github.com/Jakaria030/msa-school",
        },
        {
            title: "Adopt a Pet",
            description:
                "A website that promotes pet adoption with detailed pet profiles.",
            tech: ["HTML", "Tailwind CSS", "JavaScript"],
            image: peddy,
            liveDemo: "https://jakaria030.github.io/peddy/",
            repo: "https://github.com/Jakaria030/peddy",
        },
        {
            title: "Rinterio",
            description:
                "A service offering modern home designs tailored to your preferences.",
            tech: ["HTML", "Tailwind", "Javascript"],
            image: rinterio,
            liveDemo: "https://jakaria030.github.io/rinterio/",
            repo: "https://github.com/Jakaria030/rinterio",
        },
    ];

    return (
        <div>
            {/* Banner section */}
            <section>
                <SharedBanner
                    title={title}
                    subTitle={subTitle}
                ></SharedBanner>
            </section>

            <section className='w-11/12 sm:w-10/12 mx-auto'>
                {/* Who Am I section */}
                <section className="my-10">
                    <div className="pb-5">
                        <h2 className="text-3xl sm:text-4xl text-center font-bold">Who <span className="text-primary/80">Am I?</span></h2>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                        <img className="max-w-xl max-h-80 ring-2 ring-primary/80 rounded-lg" src={aboutUs} />
                        <p className="text-lg text-gray-700 sm:w-1/3">
                            Hello! I'm a passionate Computer Science and Engineering student with experience
                            in web development, competitive programming, and teaching. I love building
                            projects that solve real-world problems and help people learn better.
                        </p>
                    </div>
                </section>

                {/* Skills section */}
                <section>
                    <div className="pb-5">
                        <h2 className="text-3xl sm:text-4xl text-center font-bold">My <span className="text-primary/80">Skills</span></h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
                        {
                            skills.map((skill) => <div key={skill.id} className="border border-primary/80 p-5 flex flex-col items-center justify-center rounded-md">
                            <img className="size-20" src={skill.technology} />
                            <h3 className="text-xl font-semibold">{skill.title}</h3>
                        </div>)
                        }
                    </div>
                </section>

                {/* Project section */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                            My <span className="text-primary/80">Projects</span>
                        </h2>
                        {/* Card */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                        <p className="text-gray-600 mt-2">{project.description}</p>
                                        <div className="mt-4">
                                            <p className="text-gray-800 font-semibold">Technologies:</p>
                                            <ul className="flex flex-wrap gap-2 mt-2">
                                                {project.tech.map((tech, i) => (
                                                    <li
                                                        key={i}
                                                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-6 flex justify-between">
                                            <a href={project.liveDemo}
                                                target="_blank"
                                                className="text-blue-500 hover:underline">
                                                Live Demo
                                            </a>
                                            <a href={project.repo} target="_blank" className="text-blue-500 hover:underline">GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default About;