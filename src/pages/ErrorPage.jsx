import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-primary/10 w-full min-h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl text-accent font-bold">404 ! Page Not Found </h1>
            <Link to="/" className="px-4 py-2 bg-accent font-bold rounded-md text-white">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;