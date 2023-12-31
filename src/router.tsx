import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/dashboard/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register/",
        element: <Register />,
    },
]);

export { router };
