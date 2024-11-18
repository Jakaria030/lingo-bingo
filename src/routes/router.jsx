import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth",
                element: <Navigate to="/auth/login"></Navigate>
            },
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;