import ReactDOM from "react-dom/client";

import { UserProvider } from "./contexts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <UserProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
            <ToastContainer
                pauseOnHover
                theme="dark"
                closeOnClick
                position="top-right"
                autoClose={3000}
            />
        </UserProvider>
    </>
);
