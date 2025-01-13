import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Effect
  }, []);

  return (
    <section className="w-full flex-box flex-col">
      {pathname === "/" ? <LandingPage /> : <Outlet />}
    </section>
  );
}

export default App;
