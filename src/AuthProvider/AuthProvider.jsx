import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    
    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logOut = () => {
            setLoading(true);
            return signOut(auth)
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    }

    const profileUpdate = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser , userInfo)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    } , [])

    const authInfo = {
            user ,
            createUser,
            signInUser,
            googleSignIn,
            logOut,
            profileUpdate
    }
    
    


    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;