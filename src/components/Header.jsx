import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="py-5">
            <h2 className="text-lg font-semibold text-txtColor text-center">Hey, Gulam Jakaria! Welcome to Lingo Bingo.</h2>

            <section className="flex justify-between items-center">
                <Link to="/" className="size-16 cursor-pointer">
                    <img className="w-full" src={logo}/>
                </Link>

                <div>
                    <Link to="/auth/login" className="px-6 py-2 bg-primary text-white font-medium">Login</Link>
                </div>
            </section>
        </div>
    );
};

export default Header;