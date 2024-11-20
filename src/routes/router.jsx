import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Learning from "../pages/Learning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import UpdateProfile from "../components/UpdateProfile";
import ProfileInformation from "../components/ProfileInformation";
import Lessons from "../components/Lessons";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/start-learning",
                element: <Learning></Learning>,
            },
            {
                path: "/tutorials",
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/lessons/:lesson_no",
                element: <PrivateRoute>
                    <Lessons></Lessons>
                </PrivateRoute>,
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
                children: [
                    {
                        path: "/profile",
                        element: <Navigate to="/profile/information" />,
                    },
                    {
                        path: "/profile/information",
                        element: <ProfileInformation></ProfileInformation>
                    },
                    {
                        path: "/profile/update",
                        element: <UpdateProfile></UpdateProfile>,
                    }
                ],
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth",
                element: <Navigate to="/auth/login"></Navigate>,
            },
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path:"/auth/reset-password",
                element: <ForgotPassword></ForgotPassword>,
            }
        ],
    },
]);

export default router;