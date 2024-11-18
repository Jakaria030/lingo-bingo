import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

            {/* Footer section */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;