import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            customAlert("Profile Updated.");
        }).catch(err => {
            customAlert("Profile Not Updated.");
        });
    };

    const customAlert = (msg) => {
        toast.success(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        const timer = setTimeout(() => {
            navigate("/profile/information");
        }, 3000);
    };

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
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;