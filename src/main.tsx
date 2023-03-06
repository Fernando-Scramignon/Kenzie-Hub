import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import Login from "../src/pages/Login";
import Register from "./pages/Register";

import { GlobalStyle } from "./styles/global";

const router = createBrowserRouter([
	{
		path: "/",
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
	</React.StrictMode>
);
