import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signInUser, setUser, signInWithGoogle} = useContext(AuthContext);
    
    const emailRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setLoginError("");
        // Login user
        signInUser(email, password)
        .then(result => {
            setUser(result.user);
            form.reset();
            navigate(location?.state ? location.state : "/");
        }).catch(err => {
            setLoginError("Enter valid credential");
        });
    };

    // Sign in with google
    const continueWithGoogle = () => {
        setLoginError("");

        signInWithGoogle()
        .then(result => {
            setUser(result.user);
            navigate(location?.state ? location.state : "/");
        }).catch(err => {
            setLoginError("Email is not valid");
        });
    };

    // Hanle Reset
    const handleReset = (e) => {
        e.preventDefault();
        navigate("/auth/reset-password", {state: {email: emailRef.current.value}});
    };

    return (
        <div className='w-11/12 sm:w-10/12 mx-auto pt-5'>
            <div className="min-h-[70vh] flex justify-center items-center">
            <div className="card bg-base-100 max-w-md w-full shadow-lg py-5">
                <h2 className='text-xl text-txtColor font-bold text-center'>Login your account.</h2>
                <form onSubmit={handleSubmit}  className="card-body py-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text to-txtColor">Email</span>
                        </label>
                        <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered to-txtColor" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text to-txtColor">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <button onClick={handleReset} className="label-text-alt link link-hover to-txtColor">Forgot password?</button>
                        </label>
                        {
                            loginError && <label className='label'>
                                <span className='text-accent'>{loginError}</span>
                            </label>
                        }
                    </div>

                    <div className="form-control mt-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-white">Login</button>
                    </div>
                </form>
                <div className="divider">or</div>
                <button onClick={continueWithGoogle} className="flex items-center justify-center gap-2 bg-primary px-4 py-2 rounded-lg text-white mx-8">
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