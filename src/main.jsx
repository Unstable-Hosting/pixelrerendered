import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage";
import EventInfo from "./components/DynamicEventsPage/EventInfo";
import DynamicEventsPage from "./components/DynamicEventsPage/DynamicEventsPage";
import TeamMembers from "./components/MeetTheTeam/team-members.jsx";
import TeamPage from "./components/MeetTheTeam/teampage.jsx";
// import EventsPage from "./pages/EventsPage.jsx";

const removePreloader = () => {
  const preloader = document.getElementById("preloaderr");
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
        path: "/event-info/:title/:eventName",
        element: <EventInfo />,
      },
      {
        path:"/team",
        element:<TeamPage/>
      }
    ],
  },
]);

window.onload = removePreloader;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
