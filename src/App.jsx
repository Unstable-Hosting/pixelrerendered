import { useEffect, useState } from "react";
// import { Outlet, Route, Router, useLocation, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useLocation } from "react-router-dom";
// import DynamicEventsPage from "./components/DynamicEventsPage/DynamicEventsPage";

function App() {
  const { pathname } = useLocation();

  return (
    // <section className="w-full flex-box flex-col">
    <section className="App w-[100%] h-[100vh]">
      {pathname === "/" ? <LandingPage /> : <Outlet />}
      {/* <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/events/:title" component={DynamicEventsPage} />
      </Switch>
    </Router> */}
    </section>
  );
}

export default App;
