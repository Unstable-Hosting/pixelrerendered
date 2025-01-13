import React, { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";

function LandingPage() {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Maintenance Mode</h1>
        <p className="text-lg text-gray-300">
          We apologize for any inconvenience. Please check back later.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
