import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";

export const useAuth = () => useContext(AuthContext)