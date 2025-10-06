import { useEffect, useState } from "react";

import { createUserWithEmailAndPassword,
     GithubAuthProvider, GoogleAuthProvider, 
     onAuthStateChanged, 
     signInWithEmailAndPassword, signInWithPopup,
      signOut } from "firebase/auth";
import { auth } from "../Components/FirebaseConfig/Firebase.Config";
import { AuthContext } from "./AuthContext";





const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const gProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();


   const signWithGoogle = async () => {
  setLoading(true);
  try {
    const result = await signInWithPopup(auth, gProvider);
    const gUser = result.user;

    // Prepare data for backend
    const userData = {
      name: gUser.displayName,
      email: gUser.email,
      photoUrl: gUser.photoURL,
      uid: gUser.uid,
      provider: "google"
    };

    // Send to backend (create if not exists)
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    return result;
  } catch (error) {
    console.error("Google SignIn Error:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};


    const signWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }



    const createUser=(email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }



    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])



    const  userInfo={
        loading,
        createUser,
        signInUser,
        signOutUser,
        signWithGoogle,
        signWithGithub,
        user
        
    }
    return (
      
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;