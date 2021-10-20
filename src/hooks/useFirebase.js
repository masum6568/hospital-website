import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";


initializeFirebase()

const useFirebase = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })


    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            }
        });


    }, [])
    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        // 
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                setEmail('')
                setPassword('')
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        password
    }
}
export default useFirebase;