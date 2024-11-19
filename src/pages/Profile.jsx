import SharedBanner from "../components/SharedBanner";
import {Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const title = "Welcome, " + user.displayName + " to your profile.";
    return (
        <div>
            {/* Banner section */}
            <section>
                <SharedBanner
                    title={title}
                ></SharedBanner>
            </section>

            <section>
                <Outlet></Outlet>
            </section>
            
        </div>
    );
};

export default Profile;