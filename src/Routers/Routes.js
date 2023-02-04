import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Main from "../Layout/Main";
import LoginPage from "../Pages/AuthenticationPage/LoginPage/LoginPage";
import SignUP from "../Pages/AuthenticationPage/SignUpPage/SignUP";
import Home from "../Pages/HomePage/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/signUp',
                element: <SignUP />
            },
        ]
    }
])