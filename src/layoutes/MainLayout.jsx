import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto font-inter bg-background">
            {/* Header section */}
            <header>
                <Header></Header>
            </header>

            {/* Navbar section */}
            <nav>
                nav
            </nav>

            {/* Banner section */}
            <section>
                banner
            </section>

            {/* Main section */}
            <main>
                main
            </main>
        </div>
    );
};

export default MainLayout;