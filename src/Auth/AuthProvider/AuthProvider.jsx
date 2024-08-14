import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init";

export  const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userInfo, setuserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleRegister = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const handleSignIn = (email, password) =>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) =>{
       return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      });
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            setuserInfo(user);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const info = {
        handleRegister, 
        logOut, 
        handleSignIn, 
        userInfo, 
        loading,
        googleLogIn,
        githubLogIn,
        updateUserProfile
    } 

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;