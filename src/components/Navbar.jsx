import { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
   
    const {user, signOutUser} = useContext(AuthContext);

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/start-learning">Start-Learning</NavLink>
        <NavLink to="/tutorials">Tutorials</NavLink>
        <NavLink to="/about">About Us</NavLink>
        {
            user && <NavLink to="/profile">My Profile</NavLink>
        }
    </>

    return (
        <div className="bg-base-200">
        <div className="navbar w-11/12 sm:w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        {/* <RxCross2></RxCross2> */}
                        <IoMdMenu className="text-3xl"></IoMdMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="size-16 flex items-center">
                    <img className="w-full p-2 hidden sm:flex" src={logo} />
                    <h2 className="flex gap-1 text-2xl font-bold ml-2"><span className="text-primary/80">Lingo</span> <span>Bingo</span></h2>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <div className="flex items-center justify-center gap-5">
                        {
                            user?.photoURL && <img className="hidden sm:flex size-14 rounded-full ring-2 ring-primary" src={user?.photoURL} />
                        }
                        <button onClick={signOutUser} className="px-4 py-1 sm:px-6 sm:py-2 bg-primary text-white">Logout</button>
                    </div>
                    : <Link to="/auth/login" className="px-4 py-1 sm:px-6 sm:py-2 bg-primary text-white">Login</Link>
                }
                
            </div>
        </div>
        </div>
    );
};

export default Navbar;