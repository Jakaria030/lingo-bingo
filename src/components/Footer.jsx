import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-base-200 pt-10">
            <div className="w-11/12 sm:w-10/12 mx-auto flex flex-col sm:flex-row gap-5 sm:justify-between text-base-content">

                <aside className="flex flex-col items-center sm:items-start">
                    <img className="size-20" src={logo} alt="" />
                    <p className="text-center sm:text-left">
                        Ligno Bingo
                        <br />
                        1/2 Kishoreganj, Dhaka.
                    </p>
                </aside>

                <nav className="flex flex-col items-center sm:items-start">
                    <h6 className="footer-title to-txtColor">Company</h6>
                    <a className="link link-hover to-txtColor">About Us</a>
                    <a className="link link-hover to-txtColor">Contact</a>
                    <a className="link link-hover to-txtColor">Toturials</a>
                    <a className="link link-hover to-txtColor">Learning</a>
                </nav>

                <nav className="flex flex-col items-center sm:items-start">
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link>
                            <FaFacebook className="text-3xl"></FaFacebook>
                        </Link>
                        <Link>
                            <FaTwitter className="text-3xl"></FaTwitter>
                        </Link>
                        <Link>
                            <FaInstagram className="text-3xl"></FaInstagram>
                        </Link>
                    </div>
                </nav>
            </div>

            <p className="text-center mt-10 pb-10 text-txtColor mx-3">Copyright © {new Date().getFullYear()} - All right reserved by Lingo Bingo.</p>
        </footer>
    );
};

export default Footer;