import { useContext } from "react";
import SharedBanner from "../components/SharedBanner";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const title = "Welcome, " + user.displayName + " to your profile.";
    return (
        <div>
            {/* Banner section */}
            <section>
                <SharedBanner
                    title={title}
                ></SharedBanner>
            </section>

            {/* Profile information */}
            <section className="w-11/12 sm:w-10/12 mx-auto">
                <div className="flex items-center justify-center my-10">
                    <div className="flex flex-col items-center justify-center gap-2 border border-primary/80 p-5 rounded-lg">
                        <div className="my-5">
                            {
                                user?.photoURL ? <img className="size-32 rounded-full ring-2 ring-primary/80" src={user?.photoURL} /> : <div className="size-32 rounded-full ring-2 ring-primary/80 flex items-center justify-center">User Photo</div>
                            }
                        </div>

                        <h3 className="text-xl font-bold">Name: {user?.displayName ? user.displayName : "N/A"}</h3>

                        <p className="text-lg font-medium">Email: {user?.email ? user.email : "N/A"}</p>

                        <button className="px-6 py-2 text-white bg-primary/80 text-center rounded-md mt-3 font-medium">Update Profile</button>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Profile;