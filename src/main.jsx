import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage";
import DynamicEventsPage from "./components/DynamicEventsPage/DynamicEventsPage";
import MeetTheTeam from "./components/MeetTheTeam.jsx"; // Import the new component

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.remove();
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "events/:title",
        element: <DynamicEventsPage />,
      },
      {
        path: "meet-the-team", // New route for "Meet the Team"
        element: <MeetTheTeam />,
      },
    ],
  },
]);

window.onload = removePreloader;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);