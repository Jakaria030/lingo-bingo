import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../pages/Loader";

const Header = () => {
    const {user, loading} = useContext(AuthContext);

    return (
        <div className="w-11/12 sm:w-10/12 mx-auto pt-5">
        {
            user && user?.displayName ? <h2 className="text-lg font-semibold text-txtColor text-center">Hey, {user.displayName}! Welcome to Lingo Bingo.</h2>
            : ""
        }
        </div>
    );
};

export default Header;