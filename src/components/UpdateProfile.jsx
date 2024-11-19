import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
    const {user, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();


    const updateUserData = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        updateUserProfile({displayName: name, photoURL: photo})
        .then(() => {
            alert("Update success");
        }).catch(err => {
            alert("Update unsuccess.");
        });
        navigate("/profile/information");
    }
    return (
        <div className="w-11/12 sm:w-10/12 mx-auto ">
            <div className="mx-auto bg-base-100 w-full max-w-96 border border-primary/90 rounded-md shrink-0 h-[342px] my-10">
                <form onSubmit={updateUserData} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="mt-16 flex justify-between items-center">
                        <Link to="/profile/information" className="px-5 py-2 rounded-md bg-accent text-white">Cancle</Link>
                        <button type="submit" className="px-5 py-2 rounded-md bg-primary text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;