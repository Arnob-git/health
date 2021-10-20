import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googlePeovider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googlePeovider)
    }

    const emailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])


    return {
        user,
        setUser,
        signInEmailPass,
        googleSignIn,
        logOut,
        emailPass,
        
    }

}

export default useFirebase;