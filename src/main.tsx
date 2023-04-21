import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import Login from "../src/pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login/",
        element: <Login />,
    },
    {
        path: "/register/",
        element: <Register />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ToastContainer
            pauseOnHover
            theme="dark"
            closeOnClick
            position="top-right"
            autoClose={3000}
        />
    </React.StrictMode>
);
