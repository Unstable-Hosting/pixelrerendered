import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // preloader.style.backgroundColor = "transparent";
    preloader.style.opacity = "0";
    // setTimeout(() => preloader.remove(), 500);
    preloader.remove();
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/test",
        element: <div>Test</div>,
      },
    ],
  },
]);

window.onload = () => {
  removePreloader();
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
