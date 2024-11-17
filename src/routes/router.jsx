import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
    },
]);

export default router;