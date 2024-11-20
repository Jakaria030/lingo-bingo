import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
    const {forgotPassword} = useContext(AuthContext);
    const location = useLocation();
    const email = location.state.email || "";

    const handleSubmit = (e) => {
        e.preventDefault();
        const currenEmail = e.target.email.value;
        forgotPassword(currenEmail)
        .then(() => {
            e.target.email.value = "";
            window.open("https://mail.google.com", "_blank");
        }).catch((err) => {
            console.log("Error: ", err);
        });
    };

    return (

        <div className='w-11/12 sm:w-10/12 mx-auto pt-5'>
            <div className="min-h-[70vh] flex justify-center items-center">
                <div className="card bg-base-100 max-w-md w-full shadow-lg py-5">
                    <h2 className='text-xl text-txtColor font-bold text-center'>Reset your password.</h2>
                    <form onSubmit={handleSubmit} className="card-body py-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text to-txtColor">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered to-txtColor" defaultValue={email} required />
                        </div>

                        <div className="form-control mt-2">
                            <button className="px-4 py-2 rounded-lg bg-primary text-white">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ForgotPassword;