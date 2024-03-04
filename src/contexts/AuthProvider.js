import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with Email and Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with Email and Password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();

    }, [])


    const authInfo = {
        createUser,
        logIn,
        updateUser,
        user,
        loading,
        logInWithGoogle,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;