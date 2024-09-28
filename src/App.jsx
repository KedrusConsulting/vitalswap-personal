import React, { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import Loadable from "./components/Loadable";

const Personal = Loadable(lazy(() => import("./pages/Personal")));
const Terms = Loadable(lazy(() => import("./pages/Terms")));
const Privacy = Loadable(lazy(() => import("./pages/Privacy")));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="vitalswap">
      <Routes>
        <Route exact path="/" element={<Personal />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
