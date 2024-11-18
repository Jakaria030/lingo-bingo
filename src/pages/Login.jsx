import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    return (
        <div className='w-11/12 sm:w-10/12 mx-auto pt-5'>
            <div className="min-h-[70vh] flex justify-center items-center">
            <div className="card bg-base-100 max-w-md w-full shadow-lg py-5">
                <h2 className='text-xl text-txtColor font-bold text-center'>Login your account.</h2>
                <form  className="card-body py-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text to-txtColor">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered to-txtColor" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text to-txtColor">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover to-txtColor">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-white">Login</button>
                    </div>
                </form>
                <div className="divider">or</div>
                <button className="flex items-center justify-center gap-2 bg-primary px-4 py-2 rounded-lg text-white mx-8">
                    <FaGoogle></FaGoogle>
                    <span>Continue With Google</span>
                </button>
                <p className='text-center text-txtColor mt-4'>Don't have an account? <Link to="/auth/register" className='font-medium underline text-primary'>Register</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;