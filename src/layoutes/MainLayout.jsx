import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="font-inter bg-background">
            {/* Header section */}
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>


            {/* Main section */}
            <main>
                main
            </main>
        </div>
    );
};

export default MainLayout;