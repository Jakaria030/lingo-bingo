import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const AuthLayout = () => {
    return (
        <div className="font-inter bg-background overflow-y-scroll">
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;