import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg-base-200">
            {
                user && <div className="w-11/12 sm:w-10/12 mx-auto py-3">
                    <h2 className="text-lg font-semibold text-txtColor text-center">Hey, {user.displayName}! Welcome to Lingo Bingo.</h2>
                </div>
            }
            
        </div>
    );
};

export default Header;