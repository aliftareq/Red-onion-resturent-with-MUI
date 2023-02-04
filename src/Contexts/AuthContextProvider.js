import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";


// @ creating AuthContext 
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const authMethods = useFirebase()

    return (
        <AuthContext.Provider value={authMethods}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;