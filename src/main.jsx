import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import PreEvent from "./components/Pre-event/PreEvent";
// import LandingPage from "./pages/LandingPage";
// import EventInfo from './components/DynamicEventsPage/EventInfo'
// import DynamicEventsPage from "./components/DynamicEventsPage/DynamicEventsPage";

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.remove();
  }
};

// Comment out the old router configuration
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <LandingPage />,
//       },
//       {
//         path: "events/:title",
//         element: <DynamicEventsPage />,
//       },
//       {
//         path: "/event-info/:title/:eventName",
//         element: <EventInfo />
//       }
//     ],
//   },
// ]);

window.onload = removePreloader;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreEvent />
  </React.StrictMode>
);
