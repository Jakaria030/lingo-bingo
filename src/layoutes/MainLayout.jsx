import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="font-inter">
            {/* Header section */}
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>


            {/* Main section */}
            <main >
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;