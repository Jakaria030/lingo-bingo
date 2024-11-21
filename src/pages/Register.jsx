import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Title from '../components/Title';


const Register = () => {
    const {createNewUser, setUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState("");

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        setRegisterError("");
        // valid password check
        if(password.length < 6){
            setRegisterError("Password must be at least 6 characters long.")
            return;
        }

        const uppercaseRegex = /[A-Z]/;
        if(!uppercaseRegex.test(password)){
            setRegisterError("Password must contain at least one uppercase letter.");
            return;
        }

        const lowercaseRegex = /[a-z]/;
        if(!lowercaseRegex.test(password)){
            setRegisterError("Password must contain at least one lowercase letter");
            return;
        }

        // User registration
        createNewUser(email, password)
        .then(result => {
            setRegisterError("");
            setUser(result);
            // User profile update with name and image
            updateUserProfile({displayName: name, photoURL: photo})
            .then(()=> {
                navigate("/");
            }).catch(err => {
                setRegisterError(err.message);
            });
        }).catch(err => {
            setRegisterError(err.message);
        });
    };

    // Sign in with google
    const continueWithGoogle = () => {
        setRegisterError("");
        signInWithGoogle()
        .then(result => {
            setUser(result.user);
            navigate(location?.state ? location.state : "/");
        }).catch(err => {
            setRegisterError("Email is not valid");
        });
    };

    return (
        <div className='w-11/12 sm:w-10/12 mx-auto pt-5'>
            <Title title="Register"></Title>
            <div className='min-h-[70vh] flex justify-center items-center'>
                <div className="card bg-base-100 max-w-md w-full shadow-lg py-5">
                    <h2 className='text-xl text-txtColor font-bold text-center'>Register your account.</h2>
                    <form onSubmit={handleSubmit} className="card-body py-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text to-txtColor">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered to-txtColor" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text to-txtColor">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered to-txtColor" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text to-txtColor">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered to-txtColor" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text to-txtColor">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        {
                            registerError && <label className='label'>
                                <span className='text-accent'>{registerError}</span>
                            </label>
                        }

                        <div className="form-control mt-2">
                            <button className="px-4 py-2 rounded-lg bg-primary text-white">Register</button>
                        </div>
                    </form>
                    <div className="divider">or</div>
                    <button onClick={continueWithGoogle} className="flex items-center justify-center gap-2 bg-primary px-4 py-2 rounded-lg text-white mx-8">
                        <FaGoogle></FaGoogle>
                        <span>Continue With Google</span>
                    </button>
                    <p className='text-center text-txtColor mt-4'>Already have an account? <Link to="/auth/login" className='font-medium underline text-primary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;