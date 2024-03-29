import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Main from "../Layout/Main";
import LoginPage from "../Pages/AuthenticationPage/LoginPage/LoginPage";
import SignUP from "../Pages/AuthenticationPage/SignUpPage/SignUP";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/HomePage/Home/Home";
import MealDetails from "../Pages/MealDetails/MealDetails";
import OrderStatus from "../Pages/OrderStatus/OrderStatus";
import PrivateRoute from "./PrivateRoute";

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
            {
                path: '/meal-details/:mealId',
                element: <PrivateRoute><MealDetails /></PrivateRoute>
            },
            {
                path: '/order-status',
                element: <OrderStatus />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
        ]
    }
])