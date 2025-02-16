import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [words, setWords] = useState([]);

    const provider = new GoogleAuthProvider();

    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    // sign up user
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user profile
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

     //holding current user
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };

    }, [user, setUser]);

    // Reset password
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    };

    // Words fetch
    useEffect(()=> {
        fetch("/german-words.json")
        .then(res => res.json())
        .then(data => setWords(data))
    }, []);

    // Authuntication Infromation
    const authInfo = {
        user,
        setUser,
        createNewUser,
        signInUser,
        signOutUser,
        loading,
        updateUserProfile,
        signInWithGoogle,
        words,
        forgotPassword
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;