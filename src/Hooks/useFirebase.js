import { useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

// intializing firebase app
// app()

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const auth = getAuth(app)

    //@ register with email and password
    const registerWithEmailAndPassword = async (userName, email, password, navigate) => {
        try {
            setUserLoading(true)
            setAuthError('')

            //register user 
            await createUserWithEmailAndPassword(auth, email, password);

            //update user profile
            await updateProfile(auth.currentUser, {
                displayName: userName
            })

            //redirect to home page
            navigate('/')
        }
        catch (error) {
            setAuthError(error.message)
        }
        finally {
            setUserLoading(false)
        }
    }

    //sign-in with email and password
    const loginWithEmailAndPassword = async (email, password, location, navigate) => {
        try {
            setUserLoading(true)
            await signInWithEmailAndPassword(auth, email, password);
            setAuthError('');
            location?.state?.from
                ? navigate(location.state.from.pathname)
                : navigate('/')
        }
        catch (error) {
            if (error.message.includes('auth/user-not-found')) {
                setAuthError('No user found with this email😢')
            }
            else if (error.message.includes('auth/wrong-password')) {
                setAuthError('Wrong Password☹️')
            }
            else {
                setAuthError(error.message)
            }
        }
        finally {
            setUserLoading(false)
        }
    }

    //@ logout user 
    const logoutUser = (navigate) => {
        signOut(auth).then(() => {
            console.log('user logged out');
            //redirect to home page
            navigate('/login')
        })
    }

    // observing auth state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                //console.log(user);
            }
            else {
                setUser(null)
            }
            setUserLoading(false)
        })

        return () => unSubscribe();
    }, [auth])


    return {
        user,
        userLoading,
        authError,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        logoutUser
    }

}

export default useFirebase;