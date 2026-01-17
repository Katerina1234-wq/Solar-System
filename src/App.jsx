import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SolarSystemPage from "./pages/SolarSystemPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ExpeditionsPage from "./pages/ExpeditionsPage";
import AliensPage from "./pages/AliensPage";
import ExpeditionDetails from "./pages/ExpeditionDetails";

function App() {
  return (
    <Router>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<SolarSystemPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/expeditions" element={<ExpeditionsPage />} />
        <Route path="/aliens" element={<AliensPage />} />

        {/* Expedition Details */}
        <Route path="/expedition/:id" element={<ExpeditionDetails />} />

        {/* fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
              Page Not Found
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
